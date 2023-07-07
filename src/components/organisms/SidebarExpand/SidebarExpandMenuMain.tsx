'use client';

import type { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { createPaths, getLocalePath } from '@/common';
import { Sidebar } from '@/components/atoms';

import { SidebarExpandMenuMainProps } from './types';

const SidebarExpandMenuMain: FC<SidebarExpandMenuMainProps> = ({
  ...props
}) => {
  const currentPath = usePathname();
  const paths = createPaths();
  const t = useTranslations('Sidebar');
  const locale = useLocale();

  const twBgColor = 'bg-gray-100 dark:bg-gray-700';

  return (
    <Sidebar.ItemGroup {...props}>
      {paths.map((p) => {
        if ('path' in p) {
          const path = getLocalePath(locale, p.itemLabel);

          return (
            <Sidebar.Item
              key={p.itemLabel}
              as={Link}
              href={path}
              icon={p.icon}
              className={path === currentPath ? twBgColor : ''}
              {...props}
            >
              {t(p.itemLabel)}
            </Sidebar.Item>
          );
        }
        return (
          <Sidebar.Collapse
            key={p.collapseLabel}
            label={t(p.collapseLabel)}
            icon={p.icon}
            open={false}
          >
            {p.item.map((i) => {
              const path = getLocalePath(locale, i.itemLabel, p.collapseLabel);
              return (
                <Sidebar.Item
                  key={i.itemLabel}
                  as={Link}
                  href={path}
                  icon={i.icon}
                  className={path === currentPath ? twBgColor : ''}
                  {...props}
                >
                  {t(i.itemLabel)}
                </Sidebar.Item>
              );
            })}
          </Sidebar.Collapse>
        );
      })}
    </Sidebar.ItemGroup>
  );
};

export { SidebarExpandMenuMain };
