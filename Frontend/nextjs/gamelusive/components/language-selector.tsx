"use client";

import { ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/components/language-provider";
import { languages, Language } from "@/lib/i18n";

interface LanguageSelectorProps {
  variant?: "default" | "mobile";
  isScrolled?: boolean;
}

export function LanguageSelector({ variant = "default", isScrolled = false }: LanguageSelectorProps) {
  const { language, setLanguage, t } = useLanguage();

  const currentLanguage = languages.find(lang => lang.code === language);

  if (variant === "mobile") {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="justify-start gap-2 w-full">
            <Globe className="h-4 w-4" />
            <span>{t('nav.changeLanguage')}</span>
            <ChevronDown className="h-4 w-4 ml-auto" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`cursor-pointer ${language === lang.code ? 'bg-purple-50 text-purple-700' : ''}`}
            >
              <span className="font-medium">{lang.nativeName}</span>
              <span className="text-sm text-muted-foreground ml-2">({lang.name})</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`gap-1 ${
            isScrolled 
              ? "text-muted-foreground hover:text-foreground" 
              : "text-black hover:text-black/80"
          }`}
        >
          <Globe className="h-4 w-4" />
          <span className="text-sm font-medium">{currentLanguage?.code.toUpperCase()}</span>
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`cursor-pointer ${language === lang.code ? 'bg-purple-50 text-purple-700' : ''}`}
          >
            <span className="font-medium">{lang.nativeName}</span>
            <span className="text-sm text-muted-foreground ml-2">({lang.name})</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
