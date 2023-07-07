import type {
  ButtonGroupProps as FlowbiteButtonGroupProps,
  ButtonProps as FlowbiteButtonProps,
} from '@/components/flowbite-react';

interface ButtonCustomThemeProps {}
interface ButtonGroupCustomThemeProps {}

interface ButtonProps
  extends Omit<FlowbiteButtonProps, 'theme'>,
    ButtonCustomThemeProps {}
interface ButtonGroupProps
  extends Omit<FlowbiteButtonGroupProps, 'theme'>,
    ButtonGroupCustomThemeProps {}

export type { ButtonCustomThemeProps, ButtonGroupProps, ButtonProps };
