"use client";

import { useLanguage } from '@/components/language-provider';
import { useEffect } from 'react';

export function LanguageMetadata() {
  const { language } = useLanguage();

  useEffect(() => {
    // Update the HTML lang attribute when language changes
    document.documentElement.lang = language;
  }, [language]);

  return null;
}
