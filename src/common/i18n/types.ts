export enum Locale {
  ZH_CN = 'zh-CN',
  ZH_HANT = 'zh-Hant',
  EN_US = 'en-US',
}

export interface LocaleItem {
  flagSrc: string;
  locale: Locale;
  content: string;
}
