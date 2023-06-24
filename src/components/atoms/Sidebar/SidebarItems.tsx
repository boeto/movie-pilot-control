import { FC } from 'react';
import { SidebarItemsProps } from './types';
import { Sidebar as FlowbiteSidebar } from '@/components/flowbite-react';
import { sidebarCustomTheme } from './theme';

const SidebarItems: FC<SidebarItemsProps> = ({ children, ...props }) => {
  return <FlowbiteSidebar.Items {...props}>{children}</FlowbiteSidebar.Items>;
};

export { SidebarItems };
