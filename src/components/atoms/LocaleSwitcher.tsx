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
    <div>
      <p>Locale switcher:</p>
      <ul>
        {i18nConfig.locales.map((locale) => {
          return (
            <li key={locale} className="text-pink-500">
              <Link href={redirectedPathName(locale)}>{locale}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export { LocaleSwitcher };
