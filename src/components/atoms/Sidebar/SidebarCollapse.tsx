import { FC } from 'react';
import { SidebarCollapseProps } from './types';
import { Sidebar as FlowbiteSidebar } from '@/components/flowbite-react';
import { sidebarCustomTheme } from './theme';

const SidebarCollapse: FC<SidebarCollapseProps> = ({ children, ...props }) => {
  return (
    <FlowbiteSidebar.Collapse theme={sidebarCustomTheme?.collapse} {...props}>
      {children}
    </FlowbiteSidebar.Collapse>
  );
};

export { SidebarCollapse };
