import { FC } from 'react';
import { SidebarItemProps } from './types';
import { Sidebar as FlowbiteSidebar } from '@/components/flowbite-react';
import { sidebarCustomTheme } from './theme';

const SidebarItem: FC<SidebarItemProps> = ({ children, ...props }) => {
  return (
    <FlowbiteSidebar.Item theme={sidebarCustomTheme?.item} {...props}>
      {children}
    </FlowbiteSidebar.Item>
  );
};

export { SidebarItem };
