import type {
  ButtonGroupProps as FlowbiteButtonGroupProps,
  ButtonProps as FlowbiteButtonProps,
} from '@/components/flowbite-react';

interface ButtonProps extends Omit<FlowbiteButtonProps, 'theme'> {}
interface ButtonGroupProps extends Omit<FlowbiteButtonGroupProps, 'theme'> {}

export type { ButtonGroupProps, ButtonProps };
