import type React from 'react';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';

import { ThemeProvider } from '@/components/theme-provider';
import { routing } from '@/i18n/routing';
import { LangProvider } from '@/components/lang/lang-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'Harold Gonzalo Osorio Flores | Desarrollador Full Stack & Ingeniero de Sistemas',
  description:
    'Ingeniero de Sistemas especializado en Next.js, React, NestJS y Spring Boot. Desarrollador Full Stack con experiencia en soluciones escalables y tecnologías modernas.',
  keywords:
    'Harold Osorio, desarrollador full stack, ingeniero sistemas, Next.js, React, NestJS, Spring Boot, Arequipa, Perú',
  authors: [{ name: 'Harold Gonzalo Osorio Flores' }],
  creator: 'Harold Gonzalo Osorio Flores',
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: 'https://portfolio-harold-iota.vercel.app',
    title: 'Harold Gonzalo Osorio Flores | Desarrollador Full Stack',
    description:
      'Ingeniero de Sistemas especializado en desarrollo web moderno y soluciones escalables. Experiencia en Next.js, React, NestJS y Spring Boot.',
    siteName: 'Harold Osorio - Portafolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harold Gonzalo Osorio Flores | Desarrollador Full Stack',
    description:
      'Ingeniero de Sistemas especializado en desarrollo web moderno y soluciones escalables.',
    creator: '@haroldosorio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <LangProvider>{children}</LangProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
