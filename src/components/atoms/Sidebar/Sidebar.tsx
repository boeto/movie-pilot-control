import { FC } from 'react';
import type { SidebarComponentProps } from './types';
import { Sidebar as FlowbiteSidebar } from '@/components/flowbite-react';
import { sidebarCustomTheme } from './theme';
import { SidebarItem } from './SidebarItem';
import { SidebarItems } from './SidebarItems';
import { SidebarItemGroup } from './SidebarItemGroup';
import { SidebarCollapse } from './SidebarCollapse';
import { SidebarCTA } from './SidebarCTA';
import { SidebarLogo } from './SidebarLogo';

const SidebarComponent: FC<SidebarComponentProps> = ({
  children,
  ...props
}) => {
  return (
    <FlowbiteSidebar theme={sidebarCustomTheme} {...props}>
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
