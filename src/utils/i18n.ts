export enum Locales {
  ZH_CN = 'zh-CN',
  ZH_HANT = 'zh-Hant',
  EN_US = 'en-US',
}

export const i18nConfig = {
  defaultLocale: Locales.ZH_CN,
  locales: [Locales.ZH_CN, Locales.ZH_HANT, Locales.EN_US],
} as const;

export type Locale = (typeof i18nConfig)['locales'][number];

const i18nDictionaries = Object.fromEntries(
  Object.values(Locales).map((locale) => [
    locale,
    () => import(`@/common/i18n/${locale}.json`).then((m) => m.default),
  ]),
);

export const getDictionary = (locale: Locale) => i18nDictionaries[locale]();
