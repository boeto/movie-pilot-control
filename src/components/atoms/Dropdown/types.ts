import { ComponentProps, PropsWithChildren } from 'react';
import type {
  DropdownProps as FlowbiteDropdownComponentProps,
  DropdownItemProps as FlowbiteDropdownItemProps,
} from '@/components/flowbite-react';

export interface DropdownComponentProps
  extends Omit<FlowbiteDropdownComponentProps, 'theme'> {}

export interface DropdownItemProps
  extends Omit<FlowbiteDropdownItemProps, 'theme'> {}

export type DropdownDividerProps = ComponentProps<'div'>;

export type DropdownHeaderProps = PropsWithChildren & DropdownDividerProps;
