import { FC } from 'react';

import { Sidebar as FlowbiteSidebar } from '@/components/flowbite-react';

import { SidebarCollapse } from './SidebarCollapse';
import { SidebarCTA } from './SidebarCTA';
import { SidebarItem } from './SidebarItem';
import { SidebarItemGroup } from './SidebarItemGroup';
import { SidebarItems } from './SidebarItems';
import { SidebarLogo } from './SidebarLogo';
import { sidebarCustomTheme } from './theme';
import type { SidebarComponentProps } from './types';

const SidebarComponent: FC<SidebarComponentProps> = ({
  children,
  collapsed,
  ...props
}) => {
  return (
    <FlowbiteSidebar
      collapsed={collapsed}
      theme={sidebarCustomTheme}
      {...props}
    >
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
