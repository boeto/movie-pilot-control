import { FC } from 'react';

import { Sidebar as FlowbiteSidebar } from '@/components/flowbite-react';

import { SidebarLogoProps } from './types';

const SidebarLogo: FC<SidebarLogoProps> = ({ children, ...props }) => {
  return <FlowbiteSidebar.Logo {...props}>{children}</FlowbiteSidebar.Logo>;
};

export { SidebarLogo };
