import { FC } from 'react';

import { Sidebar as FlowbiteSidebar } from '@/components/flowbite-react';

import { getSidebarCustomTheme } from './theme';
import { SidebarCTAProps } from './types';

const SidebarCTA: FC<SidebarCTAProps> = ({ children, ...props }) => {
  const theme = getSidebarCustomTheme()?.cta;
  return (
    <FlowbiteSidebar.CTA theme={theme} {...props}>
      {children}
    </FlowbiteSidebar.CTA>
  );
};

export { SidebarCTA };
