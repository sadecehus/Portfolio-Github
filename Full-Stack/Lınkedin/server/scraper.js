const axios = require('axios');
const cheerio = require('cheerio');

const BLOCKED_MESSAGE = 'LinkedIn bu URL\'yi engelledi. Lütfen ilanı aşağıya yapıştırın.';

function cleanText(value) {
  return String(value || '')
    .replace(/\s+/g, ' ')
    .replace(/\u00a0/g, ' ')
    .trim();
}

function extractDescription($) {
  const candidates = [
    '.description__text',
    '.show-more-less-html__markup',
    '.jobs-description__content',
    '[data-test-id="job-details"]',
    'main',
    'article',
  ];

  for (const selector of candidates) {
    const text = cleanText($(selector).text());

    if (text.length > 180) {
      return text;
    }
  }

  return cleanText($('body').text());
}

function extractCompany($) {
  const selectors = [
    '.topcard__org-name-link',
    '.topcard__flavor-row .topcard__flavor',
    '.job-details-jobs-unified-top-card__company-name',
    '.jobs-unified-top-card__company-name',
  ];

  for (const selector of selectors) {
    const text = cleanText($(selector).first().text());

    if (text) {
      return text;
    }
  }

  return '';
}

function looksBlocked(html, $) {
  const bodyText = cleanText($('body').text()).toLowerCase();
  const htmlText = String(html || '').toLowerCase();

  const blockTokens = [
    'security verification',
    'captcha',
    'unusual activity',
    'access denied',
    'please enable cookies',
    'blocked',
  ];

  return blockTokens.some((token) => bodyText.includes(token) || htmlText.includes(token));
}

async function scrapeLinkedInJob(url) {
  if (!url || !/^https?:\/\//i.test(url)) {
    return {
      success: false,
      message: 'Geçerli bir URL girin.',
    };
  }

  try {
    const response = await axios.get(url, {
      timeout: 12000,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9,tr;q=0.8',
      },
      validateStatus: () => true,
    });

    if ([403, 429, 999].includes(response.status)) {
      return {
        success: false,
        message: BLOCKED_MESSAGE,
      };
    }

    if (response.status >= 400) {
      return {
        success: false,
        message: 'İlan sayfası alınamadı. Lütfen metni manuel yapıştırın.',
      };
    }

    const html = String(response.data || '');
    const $ = cheerio.load(html);

    if (looksBlocked(html, $)) {
      return {
        success: false,
        message: BLOCKED_MESSAGE,
      };
    }

    const title =
      cleanText($('meta[property="og:title"]').attr('content')) ||
      cleanText($('h1').first().text()) ||
      'Untitled Job Posting';

    const company =
      extractCompany($) ||
      cleanText($('meta[name="author"]').attr('content')) ||
      'Unknown Company';

    const description = extractDescription($);

    if (!description || description.length < 120) {
      return {
        success: false,
        message: BLOCKED_MESSAGE,
      };
    }

    return {
      success: true,
      data: {
        url,
        title,
        company,
        description,
      },
    };
  } catch (error) {
    return {
      success: false,
      message: 'Scrape işlemi başarısız oldu. Lütfen ilan metnini yapıştırın.',
    };
  }
}

module.exports = {
  scrapeLinkedInJob,
  BLOCKED_MESSAGE,
};
