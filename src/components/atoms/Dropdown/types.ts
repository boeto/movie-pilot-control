import { ComponentProps, PropsWithChildren } from 'react';

import type {
  DropdownItemProps as FlowbiteDropdownItemProps,
  DropdownProps as FlowbiteDropdownComponentProps,
} from '@/components/flowbite-react';

interface DropdownComponentProps
  extends Omit<FlowbiteDropdownComponentProps, 'theme'> {}

interface DropdownItemProps extends Omit<FlowbiteDropdownItemProps, 'theme'> {}

type DropdownDividerProps = ComponentProps<'div'>;

type DropdownHeaderProps = PropsWithChildren & DropdownDividerProps;

export type {
  DropdownComponentProps,
  DropdownDividerProps,
  DropdownHeaderProps,
  DropdownItemProps,
};
