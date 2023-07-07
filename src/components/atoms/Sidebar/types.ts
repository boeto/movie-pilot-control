import type {
  SidebarCollapseProps as FlowbiteSidebarsCollapseProps,
  SidebarCTAProps as FlowbiteSidebarsCTAProps,
  SidebarItemProps as FlowbiteSidebarItemProps,
  SidebarLogoProps as FlowbiteSidebarsLogoProps,
} from 'flowbite-react/lib/esm/components/Sidebar';
import type { SidebarItemGroupProps as FlowbiteSidebarsItemGroupProps } from 'flowbite-react/lib/esm/components/Sidebar/SidebarItemGroup';
import type { SidebarItemsProps as FlowbiteSidebarsItemsProps } from 'flowbite-react/lib/esm/components/Sidebar/SidebarItems';

import type { SidebarProps as FlowbiteSidebarComponentProps } from '@/components/flowbite-react';

interface SidebarItemCustomThemeProps {}
interface SidebarCollapseCustomThemeProps {}
interface SidebarCTACustomThemeProps {}

interface SidebarCustomThemeProps {
  item?: SidebarItemCustomThemeProps;
  collapse?: SidebarCollapseCustomThemeProps;
  cta?: SidebarCTACustomThemeProps;
}

interface SidebarItemProps
  extends Omit<FlowbiteSidebarItemProps, 'theme'>,
    SidebarItemCustomThemeProps {
  isHidden?: boolean;
}

interface SidebarCollapseProps
  extends Omit<FlowbiteSidebarsCollapseProps, 'theme'>,
    SidebarCollapseCustomThemeProps {
  isHidden?: boolean;
}

interface SidebarCTAProps
  extends Omit<FlowbiteSidebarsCTAProps, 'theme'>,
    SidebarCTACustomThemeProps {}

interface SidebarComponentProps
  extends Omit<FlowbiteSidebarComponentProps, 'theme'>,
    SidebarCustomThemeProps {}

interface SidebarItemsProps extends FlowbiteSidebarsItemsProps {}
interface SidebarItemGroupProps extends FlowbiteSidebarsItemGroupProps {}
interface SidebarLogoProps extends FlowbiteSidebarsLogoProps {}

export type {
  SidebarCollapseProps,
  SidebarComponentProps,
  SidebarCTAProps,
  SidebarCustomThemeProps,
  SidebarItemGroupProps,
  SidebarItemProps,
  SidebarItemsProps,
  SidebarLogoProps,
};
