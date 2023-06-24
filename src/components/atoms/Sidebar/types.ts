import type { SidebarProps as FlowbiteSidebarComponentProps } from '@/components/flowbite-react';
import type {
  SidebarItemProps as FlowbiteSidebarItemProps,
  SidebarCollapseProps as FlowbiteSidebarsCollapseProps,
  SidebarCTAProps as FlowbiteSidebarsCTAProps,
  SidebarLogoProps as FlowbiteSidebarsLogoProps,
} from 'flowbite-react/lib/esm/components/Sidebar';
import type { SidebarItemsProps as FlowbiteSidebarsItemsProps } from 'flowbite-react/lib/esm/components/Sidebar/SidebarItems';
import type { SidebarItemGroupProps as FlowbiteSidebarsItemGroupProps } from 'flowbite-react/lib/esm/components/Sidebar/SidebarItemGroup';

export interface SidebarComponentProps
  extends Omit<FlowbiteSidebarComponentProps, 'theme'> {}

export interface SidebarItemProps
  extends Omit<FlowbiteSidebarItemProps, 'theme'> {}

export interface SidebarItemsProps extends FlowbiteSidebarsItemsProps {}

export interface SidebarItemGroupProps extends FlowbiteSidebarsItemGroupProps {}

export interface SidebarCollapseProps
  extends Omit<FlowbiteSidebarsCollapseProps, 'theme'> {}

export interface SidebarCTAProps
  extends Omit<FlowbiteSidebarsCTAProps, 'theme'> {}

export interface SidebarLogoProps extends FlowbiteSidebarsLogoProps {}
