import type {
  NavbarComponentProps as FlowbiteNavbarComponentProps,
  NavbarCollapseProps as FlowbiteNavbarsCollapseProps,
  NavbarToggleProps as FlowbiteNavbarsToggleProps,
} from '@/components/flowbite-react';
import { ComponentProps, ElementType, PropsWithChildren } from 'react';

export interface NavbarBrandProps
  extends PropsWithChildren,
    ComponentProps<'a'> {
  as?: ElementType;
  href?: string;
}

export interface NavbarLinkProps
  extends PropsWithChildren,
    ComponentProps<'a'> {
  active?: boolean;
  as?: ElementType;
  disabled?: boolean;
  href?: string;
}

export interface NavbarComponentProps
  extends Omit<FlowbiteNavbarComponentProps, 'theme'> {}

export interface NavbarCollapseProps
  extends Omit<FlowbiteNavbarsCollapseProps, 'theme'> {}
export interface NavbarToggleProps
  extends Omit<FlowbiteNavbarsToggleProps, 'theme'> {}
