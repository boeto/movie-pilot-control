import { FC } from 'react';
import { SidebarLogoProps } from './types';
import { Sidebar as FlowbiteSidebar } from '@/components/flowbite-react';

const SidebarLogo: FC<SidebarLogoProps> = ({ children, ...props }) => {
  return <FlowbiteSidebar.Logo {...props}>{children}</FlowbiteSidebar.Logo>;
};

export { SidebarLogo };
