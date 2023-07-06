'use client';

import { FC, useEffect, useTransition } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

import { getLocaleItems, Locale, trimmeLocalePathname } from '@/common';
import { Dropdown } from '@/components/atoms';
import { setInitialDarkMode } from '@/utils';

import { CurrentLocaleItemProps, LocaleItemsProps } from './types';

const CurrentLocaleItem: FC<CurrentLocaleItemProps> = ({ item }) => {
  return (
    <span className="flex h-10 w-10 cursor-pointer justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white">
      <span className="sr-only">Current language</span>
      <Image
        priority
        src={item.flagSrc}
        height={20}
        width={20}
        alt={item.locale}
        className="h-5 w-5 self-center rounded-full"
      />
    </span>
  );
};

const LocaleItems: FC<LocaleItemsProps> = ({ items }: LocaleItemsProps) => {
  const router = useRouter();
  const pathName = usePathname();
  const locale = useLocale();

  const [, startTransition] = useTransition();

  useEffect(() => {
    setInitialDarkMode();
  }, [locale]);

  const handleClick = (newLocale: Locale) => {
    const trimmednewLocalePathname = trimmeLocalePathname(pathName, locale);
    const newLocalePathname = `/${newLocale}${trimmednewLocalePathname}`;
    startTransition(() => {
      router.replace(newLocalePathname);
    });
  };

  return (
    <div role="none">
      {items.map((item) => {
        return (
          <button
            type="button"
            key={`LanguageItems-${item.locale}`}
            onClick={() => handleClick(item.locale)}
            className="w-full border-0 border-gray-300 px-4 py-2 text-sm text-gray-700 first:pt-3 last:pb-3 hover:bg-gray-100 first:hover:rounded-t-xl last:hover:rounded-b-xl dark:text-gray-400 dark:hover:bg-gray-600 "
          >
            <div className="flex items-center">
              <Image
                priority
                src={item.flagSrc}
                height={20}
                width={20}
                alt={item.locale}
                className="mr-2 h-5 w-5"
              />
              <span className="whitespace-nowrap pr-5">{item.content}</span>
            </div>
          </button>
        );
      })}
    </div>
  );
};

const LocaleDropdown: FC = () => {
  const localeItems = getLocaleItems();

  const locale = useLocale();
  const currentLocaleItem =
    localeItems.find((item) => item.locale === locale) || localeItems[0];
  const otherLocaleItems = localeItems.filter((item) => item.locale !== locale);

  return (
    <Dropdown
      arrowIcon={false}
      inline
      label={<CurrentLocaleItem item={currentLocaleItem} />}
    >
      <LocaleItems items={otherLocaleItems} />
    </Dropdown>
  );
};

export { LocaleDropdown as LanguageDropdown };
