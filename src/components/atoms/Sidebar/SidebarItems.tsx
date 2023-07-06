import { FC } from 'react';

import { Sidebar as FlowbiteSidebar } from '@/components/flowbite-react';

import { SidebarItemsProps } from './types';

const SidebarItems: FC<SidebarItemsProps> = ({ children, ...props }) => {
  return <FlowbiteSidebar.Items {...props}>{children}</FlowbiteSidebar.Items>;
};

export { SidebarItems };
