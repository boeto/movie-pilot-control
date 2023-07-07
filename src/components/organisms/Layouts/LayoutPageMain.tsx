'use client';

import { usePathname } from 'next/navigation';

import type { Locale } from '@/common';
import { getLocalePath } from '@/common';

import { NavbarSidebarLayout } from './LayoutNavbarSidebar';

const LayoutPageMain = ({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: Locale;
}) => {
  const pathname = usePathname();

  const authLoginPath = getLocalePath(locale, 'authLogin', 'auth');

  if (pathname === authLoginPath) return <>{children}</>;

  return <NavbarSidebarLayout>{children}</NavbarSidebarLayout>;
};

export { LayoutPageMain };
