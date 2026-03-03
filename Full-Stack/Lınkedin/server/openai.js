const axios = require('axios');

const DEFAULT_MODEL = process.env.OPENAI_MODEL || 'gpt-4o-mini';

const SYSTEM_PROMPT = `Sen bir iş ilanı analiz asistanısın. Verilen iş ilanı metninden:
1. Teknik skill'leri (programlama dilleri, framework'ler, araçlar)
2. Soft skill'leri
3. Sertifika/eğitim gereksinimlerini
çıkar.

Sadece JSON döndür, başka hiçbir şey yazma:
{
  "skills": [
    {"name": "Python", "category": "language"},
    {"name": "Docker", "category": "tool"},
    {"name": "Problem Solving", "category": "soft"}
  ]
}

Skill isimleri İngilizce olsun. Genel ve tekrar eden skill'leri normalize et (örn: "React.js" → "React").`;

function normalizeCategory(category) {
  const raw = String(category || '').trim().toLowerCase();

  if (['language', 'programming language'].includes(raw)) return 'language';
  if (['soft', 'soft skill', 'soft-skill'].includes(raw)) return 'soft';
  if (['tool', 'tools'].includes(raw)) return 'tool';
  if (['technical', 'tech', 'certificate', 'education'].includes(raw)) return 'technical';

  return 'technical';
}

function normalizeSkillName(name) {
  let normalized = String(name || '').trim();

  if (!normalized) return '';

  const replacements = [
    [/^react\.?js$/i, 'React'],
    [/^node\.?js$/i, 'Node.js'],
    [/^typescript$/i, 'TypeScript'],
    [/^javascript$/i, 'JavaScript'],
    [/^problem\s*solving$/i, 'Problem Solving'],
  ];

  for (const [pattern, replacement] of replacements) {
    normalized = normalized.replace(pattern, replacement);
  }

  return normalized
    .replace(/\s+/g, ' ')
    .replace(/[\s,.;:]+$/g, '')
    .trim();
}

function extractJSONObject(text) {
  const raw = String(text || '').trim();

  if (!raw) {
    throw new Error('OpenAI bos yanit dondurdu.');
  }

  const codeFenceMatch = raw.match(/```json\s*([\s\S]*?)```/i) || raw.match(/```\s*([\s\S]*?)```/i);

  if (codeFenceMatch?.[1]) {
    return JSON.parse(codeFenceMatch[1]);
  }

  const firstBrace = raw.indexOf('{');
  const lastBrace = raw.lastIndexOf('}');

  if (firstBrace === -1 || lastBrace === -1 || lastBrace <= firstBrace) {
    throw new Error('OpenAI yaniti JSON formatinda degil.');
  }

  const possibleJson = raw.slice(firstBrace, lastBrace + 1);
  return JSON.parse(possibleJson);
}

async function extractSkillsFromText(description) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error('OPENAI_API_KEY tanimli degil.');
  }

  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: DEFAULT_MODEL,
      temperature: 0,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: `Is ilani metni:\n\n${description}` },
      ],
      response_format: { type: 'json_object' },
    },
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      timeout: 30000,
    }
  );

  const text = response?.data?.choices?.[0]?.message?.content || '';
  const parsed = extractJSONObject(text);

  const seen = new Set();
  const cleaned = [];

  for (const skill of parsed?.skills || []) {
    const normalizedName = normalizeSkillName(skill?.name);

    if (!normalizedName) continue;

    const key = normalizedName.toLowerCase();
    if (seen.has(key)) continue;

    seen.add(key);
    cleaned.push({
      name: normalizedName,
      category: normalizeCategory(skill?.category),
    });
  }

  return cleaned;
}

module.exports = {
  extractSkillsFromText,
};
