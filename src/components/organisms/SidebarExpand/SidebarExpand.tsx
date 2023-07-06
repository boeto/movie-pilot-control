'use client';

import type { FC } from 'react';
import { HiSearch } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';

import { Sidebar, TextInput } from '@/components/atoms';
import { selectUi, useSelector } from '@/store';
import { isSmallScreen } from '@/utils';

import { SidebarExpandMenuBottom } from './SidebarExpandMenuBottom';
import { SidebarExpandMenuMain } from './SidebarExpandMenuMain';
import { SidebarExpandMenuSub } from './SidebarExpandMenuSub';

const SidebarExpand: FC = () => {
  const { isSidebarOpen } = useSelector(selectUi);

  return (
    <div className={twMerge('lg:!block', !isSidebarOpen ? 'hidden' : '')}>
      <Sidebar
        aria-label="Sidebar with multi-level dropdown"
        collapsed={isSidebarOpen && !isSmallScreen()}
      >
        <div className="flex h-full flex-col justify-between py-2">
          <div>
            <form className="pb-3 md:hidden">
              <TextInput
                icon={HiSearch}
                type="search"
                placeholder="Search"
                required
                size={32}
              />
            </form>
            <Sidebar.Items>
              <SidebarExpandMenuMain />
              <SidebarExpandMenuSub />
            </Sidebar.Items>
          </div>
          <SidebarExpandMenuBottom />
        </div>
      </Sidebar>
    </div>
  );
};

export { SidebarExpand };
