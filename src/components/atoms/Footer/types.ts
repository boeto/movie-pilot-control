import type {
  FooterProps as FlowbiteFooterComponentProps,
  FooterLinkProps as FlowbiteFooterLinkProps,
  FooterLinkGroupProps as FlowbiteFooterLinkGroupProps,
  FooterBrandProps as FlowbiteFooterBrandProps,
  FooterIconProps as FlowbiteFooterIconProps,
  FooterCopyrightProps as FlowbiteFooterCopyrightProps,
  FooterTitleProps as FlowbiteFooterTitleProps,
} from '@/components/flowbite-react';

import type { FooterDividerProps as FlowbiteFooterDividerProps } from 'flowbite-react/lib/esm/components/Footer/FooterDivider';

export interface FooterProps
  extends Omit<FlowbiteFooterComponentProps, 'theme'> {}

export interface FooterLinkProps
  extends Omit<FlowbiteFooterLinkProps, 'theme'> {}

export interface FooterLinkGroupProps
  extends Omit<FlowbiteFooterLinkGroupProps, 'theme'> {}

export interface FooterBrandProps
  extends Omit<FlowbiteFooterBrandProps, 'theme'> {}

export interface FooterIconProps
  extends Omit<FlowbiteFooterIconProps, 'theme'> {}

export interface FooterDividerProps
  extends Omit<FlowbiteFooterDividerProps, 'theme'> {}

export interface FooterTitleProps
  extends Omit<FlowbiteFooterTitleProps, 'theme'> {}

export interface FooterCopyrightProps
  extends Omit<FlowbiteFooterCopyrightProps, 'theme'> {}
