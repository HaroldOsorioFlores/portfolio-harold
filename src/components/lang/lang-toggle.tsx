'use client';

import { Languages } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useLang } from './lang-provider';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';

export function LangToggle() {
  const locale = useLocale();
  const t = useTranslations('Lang');
  const { setLocale } = useLang();

  const languages = [
    { code: 'es', flag: '🇪🇸' },
    { code: 'en', flag: '🇺🇸' },
  ];

  const handleLanguageChange = (langCode: string) => {
    if (langCode !== locale) {
      setLocale(langCode);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed top-6 right-20 z-50 bg-white/80 backdrop-blur-sm border-blue-200 hover:bg-blue-50 dark:bg-gray-800/80 dark:border-gray-600 dark:hover:bg-gray-700 shadow-lg disabled:opacity-50"
        >
          <Languages className="h-4 w-4" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[120px]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`cursor-pointer ${
              locale === lang.code
                ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                : ''
            }`}
          >
            <span className="mr-2">{lang.flag}</span>
            {t(lang.code)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
