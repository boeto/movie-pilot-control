import type { FooterDividerProps as FlowbiteFooterDividerProps } from 'flowbite-react/lib/esm/components/Footer/FooterDivider';

import type {
  FooterBrandProps as FlowbiteFooterBrandProps,
  FooterCopyrightProps as FlowbiteFooterCopyrightProps,
  FooterIconProps as FlowbiteFooterIconProps,
  FooterLinkGroupProps as FlowbiteFooterLinkGroupProps,
  FooterLinkProps as FlowbiteFooterLinkProps,
  FooterProps as FlowbiteFooterComponentProps,
  FooterTitleProps as FlowbiteFooterTitleProps,
} from '@/components/flowbite-react';

interface FooterLinkCustomThemeProps {}
interface FooterLinkGroupCustomThemeProps {}
interface FooterBrandCustomThemeProps {}
interface FooterIconCustomThemeProps {}
interface FooterDividerCustomThemeProps {}
interface FooterTitleCustomThemeProps {}
interface FooterCopyrightCustomThemeProps {}

interface FooterCustomThemeProps {
  footerLink?: FooterLinkCustomThemeProps;
  footerLinkGroup?: FooterLinkGroupCustomThemeProps;
  footerBrand?: FooterBrandCustomThemeProps;
  footerIcon?: FooterIconCustomThemeProps;
  footerDivider?: FooterDividerCustomThemeProps;
  footerTitle?: FooterTitleCustomThemeProps;
  footerCopyRight?: FooterCopyrightCustomThemeProps;
}

interface FooterProps
  extends Omit<FlowbiteFooterComponentProps, 'theme'>,
    FooterCustomThemeProps {}

interface FooterLinkProps
  extends Omit<FlowbiteFooterLinkProps, 'theme'>,
    FooterLinkCustomThemeProps {}

interface FooterLinkGroupProps
  extends Omit<FlowbiteFooterLinkGroupProps, 'theme'>,
    FooterLinkGroupCustomThemeProps {}

interface FooterBrandProps
  extends Omit<FlowbiteFooterBrandProps, 'theme'>,
    FooterBrandCustomThemeProps {}

interface FooterIconProps
  extends Omit<FlowbiteFooterIconProps, 'theme'>,
    FooterIconCustomThemeProps {}

interface FooterDividerProps
  extends Omit<FlowbiteFooterDividerProps, 'theme'>,
    FooterDividerCustomThemeProps {}

interface FooterTitleProps
  extends Omit<FlowbiteFooterTitleProps, 'theme'>,
    FooterTitleCustomThemeProps {}

interface FooterCopyrightProps
  extends Omit<FlowbiteFooterCopyrightProps, 'theme'>,
    FooterCopyrightCustomThemeProps {}

export type {
  FooterBrandProps,
  FooterCopyrightProps,
  FooterCustomThemeProps,
  FooterDividerProps,
  FooterIconProps,
  FooterLinkGroupProps,
  FooterLinkProps,
  FooterProps,
  FooterTitleProps,
};
