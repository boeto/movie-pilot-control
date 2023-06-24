import { FC } from 'react';
import { SidebarItemGroupProps } from './types';
import { Sidebar as FlowbiteSidebar } from '@/components/flowbite-react';

const SidebarItemGroup: FC<SidebarItemGroupProps> = ({
  children,
  ...props
}) => {
  return (
    <FlowbiteSidebar.ItemGroup {...props}>{children}</FlowbiteSidebar.ItemGroup>
  );
};

export { SidebarItemGroup };
