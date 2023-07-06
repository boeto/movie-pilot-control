import { FC } from 'react';

import { Sidebar as FlowbiteSidebar } from '@/components/flowbite-react';

import { sidebarCustomTheme } from './theme';
import { SidebarCollapseProps } from './types';

const SidebarCollapse: FC<SidebarCollapseProps> = ({
  children,
  isHidden = false,
  ...props
}) => {
  return isHidden ? (
    <></>
  ) : (
    <FlowbiteSidebar.Collapse theme={sidebarCustomTheme?.collapse} {...props}>
      {children}
    </FlowbiteSidebar.Collapse>
  );
};

export { SidebarCollapse };
