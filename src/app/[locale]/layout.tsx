import { Inter } from 'next/font/google';
import Script from 'next/script';
import { NextIntlClientProvider } from 'next-intl';

import {
  createLocaleMessages,
  getLocaleMessages,
  LangChildrenProps,
  LangProps,
  localeOption,
} from '@/common';
import { DarkModeScript, LayoutPageMain, Toast } from '@/components';
import { StoreProviders } from '@/store';

import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

const generateMetadata = async ({ params: { locale } }: LangProps) => {
  const t = await createLocaleMessages(locale);

  return {
    title: t('Project.title'),
    description: t('Project.description'),
  };
};

const generateStaticParams = async () => {
  const locales = localeOption.locales.map((locale) => ({ lang: locale }));
  return locales;
};

const LocaleLayout = async ({
  children,
  params: { locale },
}: LangChildrenProps) => {
  const localeMessages = await getLocaleMessages(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <Script src="/__ENV.js" />
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900`}>
        <DarkModeScript />
        <StoreProviders>
          <NextIntlClientProvider locale={locale} messages={localeMessages}>
            <div id="root" className="relative overflow-x-hidden">
              <Toast />
              <LayoutPageMain locale={locale}>{children}</LayoutPageMain>
            </div>
          </NextIntlClientProvider>
        </StoreProviders>
      </body>
    </html>
  );
};

export { generateMetadata, generateStaticParams };
export default LocaleLayout;
