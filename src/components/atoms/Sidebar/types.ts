import type {
  SidebarCollapseProps as FlowbiteSidebarsCollapseProps,
  SidebarCTAProps as FlowbiteSidebarsCTAProps,
  SidebarItemProps as FlowbiteSidebarItemProps,
  SidebarLogoProps as FlowbiteSidebarsLogoProps,
} from 'flowbite-react/lib/esm/components/Sidebar';
import type { SidebarItemGroupProps as FlowbiteSidebarsItemGroupProps } from 'flowbite-react/lib/esm/components/Sidebar/SidebarItemGroup';
import type { SidebarItemsProps as FlowbiteSidebarsItemsProps } from 'flowbite-react/lib/esm/components/Sidebar/SidebarItems';

import type { SidebarProps as FlowbiteSidebarComponentProps } from '@/components/flowbite-react';

interface SidebarComponentProps
  extends Omit<FlowbiteSidebarComponentProps, 'theme'> {}

interface SidebarItemProps extends Omit<FlowbiteSidebarItemProps, 'theme'> {
  isHidden?: boolean;
}

interface SidebarItemsProps extends FlowbiteSidebarsItemsProps {}

interface SidebarItemGroupProps extends FlowbiteSidebarsItemGroupProps {}

interface SidebarCollapseProps
  extends Omit<FlowbiteSidebarsCollapseProps, 'theme'> {
  isHidden?: boolean;
}

interface SidebarCTAProps extends Omit<FlowbiteSidebarsCTAProps, 'theme'> {}

interface SidebarLogoProps extends FlowbiteSidebarsLogoProps {}

export type {
  SidebarCollapseProps,
  SidebarComponentProps,
  SidebarCTAProps,
  SidebarItemGroupProps,
  SidebarItemProps,
  SidebarItemsProps,
  SidebarLogoProps,
};
