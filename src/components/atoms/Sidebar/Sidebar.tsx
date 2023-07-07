import { FC } from 'react';

import { Sidebar as FlowbiteSidebar } from '@/components/flowbite-react';

import { SidebarCollapse } from './SidebarCollapse';
import { SidebarCTA } from './SidebarCTA';
import { SidebarItem } from './SidebarItem';
import { SidebarItemGroup } from './SidebarItemGroup';
import { SidebarItems } from './SidebarItems';
import { SidebarLogo } from './SidebarLogo';
import { getSidebarCustomTheme } from './theme';
import type { SidebarComponentProps } from './types';

const SidebarComponent: FC<SidebarComponentProps> = ({
  children,
  collapsed,
  ...props
}) => {
  const theme = getSidebarCustomTheme();
  return (
    <FlowbiteSidebar collapsed={collapsed} theme={theme} {...props}>
      {children}
    </FlowbiteSidebar>
  );
};

SidebarComponent.displayName = 'Sidebar';
export const Sidebar = Object.assign(SidebarComponent, {
  Collapse: SidebarCollapse,
  CTA: SidebarCTA,
  Item: SidebarItem,
  Items: SidebarItems,
  ItemGroup: SidebarItemGroup,
  Logo: SidebarLogo,
});
