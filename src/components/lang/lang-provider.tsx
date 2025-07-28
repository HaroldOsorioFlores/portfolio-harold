'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { createContext, useContext, useMemo } from 'react';

interface LangContextType {
  locale: string;
  setLocale: (newLocale: string) => void;
}

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = useLocale();
  const pathName = usePathname();
  const router = useRouter();

  const setLocale = useMemo(() => {
    return (newLocale: string) => {
      const currentPath = pathName.replace(/^\/[a-z]{2}/, '') || '/';
      router.push(`/${newLocale}${currentPath}`, { scroll: false });
    };
  }, [pathName, router]);

  const value: LangContextType = useMemo(() => {
    return {
      locale,
      setLocale,
    };
  }, [locale, setLocale]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error('useLang must be used within a LangProvider');
  }
  return context;
}
