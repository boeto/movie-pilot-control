import { FC } from 'react';

import { Sidebar as FlowbiteSidebar } from '@/components/flowbite-react';

import { getSidebarCustomTheme } from './theme';
import { SidebarCollapseProps } from './types';

const SidebarCollapse: FC<SidebarCollapseProps> = ({
  children,
  isHidden = false,
  ...props
}) => {
  const theme = getSidebarCustomTheme()?.collapse;
  return isHidden ? (
    <></>
  ) : (
    <FlowbiteSidebar.Collapse theme={theme} {...props}>
      {children}
    </FlowbiteSidebar.Collapse>
  );
};

export { SidebarCollapse };
