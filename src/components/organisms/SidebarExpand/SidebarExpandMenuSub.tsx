'use client';

import type { FC } from 'react';
import { HiClipboard, HiCollection, HiInformationCircle } from 'react-icons/hi';

import { Sidebar } from '@/components/atoms';

import { SidebarExpandMenuSubProps } from './types';

const SidebarExpandMenuSub: FC<SidebarExpandMenuSubProps> = () => {
  return (
    <Sidebar.ItemGroup>
      <Sidebar.Item
        href="https://github.com/themesberg/flowbite-react/"
        icon={HiClipboard}
      >
        Docs
      </Sidebar.Item>
      <Sidebar.Item href="https://flowbite-react.com/" icon={HiCollection}>
        Components
      </Sidebar.Item>
      <Sidebar.Item
        href="https://github.com/themesberg/flowbite-react/issues"
        icon={HiInformationCircle}
      >
        Help
      </Sidebar.Item>
    </Sidebar.ItemGroup>
  );
};
export { SidebarExpandMenuSub };
