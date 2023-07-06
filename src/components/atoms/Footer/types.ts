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

interface FooterProps extends Omit<FlowbiteFooterComponentProps, 'theme'> {}

interface FooterLinkProps extends Omit<FlowbiteFooterLinkProps, 'theme'> {}

interface FooterLinkGroupProps
  extends Omit<FlowbiteFooterLinkGroupProps, 'theme'> {}

interface FooterBrandProps extends Omit<FlowbiteFooterBrandProps, 'theme'> {}

interface FooterIconProps extends Omit<FlowbiteFooterIconProps, 'theme'> {}

interface FooterDividerProps
  extends Omit<FlowbiteFooterDividerProps, 'theme'> {}

interface FooterTitleProps extends Omit<FlowbiteFooterTitleProps, 'theme'> {}

interface FooterCopyrightProps
  extends Omit<FlowbiteFooterCopyrightProps, 'theme'> {}

export type {
  FooterBrandProps,
  FooterCopyrightProps,
  FooterDividerProps,
  FooterIconProps,
  FooterLinkGroupProps,
  FooterLinkProps,
  FooterProps,
  FooterTitleProps,
};
