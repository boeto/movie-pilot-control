import { ComponentProps, ElementType, PropsWithChildren } from 'react';

import type {
  NavbarCollapseProps as FlowbiteNavbarsCollapseProps,
  NavbarComponentProps as FlowbiteNavbarComponentProps,
  NavbarToggleProps as FlowbiteNavbarsToggleProps,
} from '@/components/flowbite-react';

interface NavbarBrandProps extends PropsWithChildren, ComponentProps<'a'> {
  as?: ElementType;
  href?: string;
}

interface NavbarLinkProps extends PropsWithChildren, ComponentProps<'a'> {
  active?: boolean;
  as?: ElementType;
  disabled?: boolean;
  href?: string;
}

interface NavbarComponentProps
  extends Omit<FlowbiteNavbarComponentProps, 'theme'> {}

interface NavbarCollapseProps
  extends Omit<FlowbiteNavbarsCollapseProps, 'theme'> {}
interface NavbarToggleProps extends Omit<FlowbiteNavbarsToggleProps, 'theme'> {}

export type {
  NavbarBrandProps,
  NavbarCollapseProps,
  NavbarComponentProps,
  NavbarLinkProps,
  NavbarToggleProps,
};
