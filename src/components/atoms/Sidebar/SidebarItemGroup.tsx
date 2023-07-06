import { FC } from 'react';

import { Sidebar as FlowbiteSidebar } from '@/components/flowbite-react';

import { SidebarItemGroupProps } from './types';

const SidebarItemGroup: FC<SidebarItemGroupProps> = ({
  children,
  ...props
}) => {
  return (
    <FlowbiteSidebar.ItemGroup {...props}>{children}</FlowbiteSidebar.ItemGroup>
  );
};

export { SidebarItemGroup };
