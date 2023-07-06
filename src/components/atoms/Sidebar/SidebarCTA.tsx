import { FC } from 'react';

import { Sidebar as FlowbiteSidebar } from '@/components/flowbite-react';

import { sidebarCustomTheme } from './theme';
import { SidebarCTAProps } from './types';

const SidebarCTA: FC<SidebarCTAProps> = ({ children, ...props }) => {
  return (
    <FlowbiteSidebar.CTA theme={sidebarCustomTheme?.cta} {...props}>
      {children}
    </FlowbiteSidebar.CTA>
  );
};

export { SidebarCTA };
