import { ComponentProps, PropsWithChildren } from 'react';

import type {
  DropdownItemProps as FlowbiteDropdownItemProps,
  DropdownProps as FlowbiteDropdownComponentProps,
} from '@/components/flowbite-react';

interface DropdownItemCustomThemeProps {}
interface DropdownCustomThemeProps {
  item?: DropdownItemCustomThemeProps;
}

interface DropdownComponentProps
  extends Omit<FlowbiteDropdownComponentProps, 'theme'>,
    DropdownCustomThemeProps {}

interface DropdownItemProps
  extends Omit<FlowbiteDropdownItemProps, 'theme'>,
    DropdownItemCustomThemeProps {}

type DropdownDividerProps = ComponentProps<'div'>;

type DropdownHeaderProps = PropsWithChildren & DropdownDividerProps;

export type {
  DropdownComponentProps,
  DropdownCustomThemeProps,
  DropdownDividerProps,
  DropdownHeaderProps,
  DropdownItemProps,
};
