'use client';

import type { FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import { selectUi, useSelector } from '@/store';

import type { NavbarSidebarLayoutProps } from '../FooterExpand';
import { FooterExpand } from '../FooterExpand';
import { NavbarExpand } from '../NavbarExpand';
import { SidebarExpand, SidebarMonitor } from '../SidebarExpand';

const ContentMain: FC<PropsWithChildren<NavbarSidebarLayoutProps>> = ({
  children,
  isFooter,
}) => {
  const { isSidebarOpen } = useSelector(selectUi);

  return (
    <main
      className={twMerge(
        'relative h-screen w-full overflow-y-auto bg-gray-50 dark:bg-gray-900',
        isSidebarOpen ? 'lg:ml-16' : 'lg:ml-64',
      )}
    >
      {children}
      {isFooter && (
        <div className="mx-4 mt-4">
          <FooterExpand />
        </div>
      )}
    </main>
  );
};

const LayoutNavbarSidebar: FC<PropsWithChildren<NavbarSidebarLayoutProps>> = ({
  children,
  isFooter = true,
}) => {
  return (
    <>
      <SidebarMonitor />
      <NavbarExpand />
      <div className="flex items-start pt-16">
        <SidebarExpand />
        <ContentMain isFooter={isFooter}>{children}</ContentMain>
      </div>
    </>
  );
};

export { LayoutNavbarSidebar as NavbarSidebarLayout };
