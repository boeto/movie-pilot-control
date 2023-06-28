export enum Langs {
  ZH_CN = 'zh-CN',
  ZH_HANT = 'zh-Hant',
  EN_US = 'en-US',
}

export const i18nConfig = {
  defaultLocale: Langs.ZH_CN,
  Langs: [Langs.ZH_CN, Langs.ZH_HANT, Langs.EN_US],
} as const;

export type Lang = (typeof i18nConfig)['Langs'][number];

const i18nDictionaries = Object.fromEntries(
  Object.values(Langs).map((locale) => [
    locale,
    () => import(`@/common/i18n/${locale}.json`).then((m) => m.default),
  ]),
);

export const getDictionary = (lang: Lang) => i18nDictionaries[lang]();
