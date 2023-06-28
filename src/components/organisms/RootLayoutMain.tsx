'use client';
import { NavbarSidebarLayout } from '@/components';
import { Lang, isClient, trimmeLangPathname } from '@/utils';

import { usePathname } from 'next/navigation';

const RootLayoutMain = ({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: Lang;
}) => {
  const pathname = usePathname();
  const newPathName = trimmeLangPathname(pathname, lang);
  if (newPathName === '/auth/login') return <>{children}</>;

  return <NavbarSidebarLayout>{children}</NavbarSidebarLayout>;
};

export { RootLayoutMain };
