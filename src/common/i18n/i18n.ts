import { createTranslator } from 'next-intl';

import { Locale, LocaleItem } from './types';

const localeOption = {
  defaultLocale: Locale.ZH_CN,
  locales: [Locale.ZH_CN, Locale.ZH_HANT, Locale.EN_US],
};

const getLocaleItems = (): LocaleItem[] => {
  return [
    {
      flagSrc: '/images/locale/zh-CN.svg',
      locale: Locale.ZH_CN,
      content: '简体中文',
    },
    {
      flagSrc: '/images/locale/zh-Hant.svg',
      locale: Locale.ZH_HANT,
      content: '繁体中文',
    },
    {
      flagSrc: '/images/locale/en-US.svg',
      locale: Locale.EN_US,
      content: 'English (US)',
    },
  ];
};

const getLocaleMessages = async (locale: Locale) =>
  (await import(`./messages/${locale}.json`)).default;

const createLocaleMessages = async (locale: Locale) => {
  const messages = await getLocaleMessages(locale);
  const t = createTranslator({ locale, messages });
  return t;
};

export {
  createLocaleMessages,
  getLocaleItems,
  getLocaleMessages,
  localeOption,
};
