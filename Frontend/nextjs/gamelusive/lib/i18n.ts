export type Language = 'en' | 'pl' | 'tr' | 'nl' | 'lt';

export const languages: { code: Language; name: string; nativeName: string }[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands' },
  { code: 'lt', name: 'Lithuanian', nativeName: 'Lietuvių' },
];

export const defaultLanguage: Language = 'en';
