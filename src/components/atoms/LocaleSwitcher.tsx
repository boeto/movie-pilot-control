'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { i18nConfig } from '@/utils';

function LocaleSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <div className="text-center">
      <p className="text-gray-900 dark:text-gray-100">Locale switcher:</p>
      <ul className="">
        {i18nConfig.locales.map((locale) => {
          return (
            <li className="text-red-500" key={locale}>
              <Link href={redirectedPathName(locale)}>{locale}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export { LocaleSwitcher };
