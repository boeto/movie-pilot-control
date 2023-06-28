import type { ButtonProps as FlowbiteButtonProps } from '@/components/flowbite-react';
import type { ButtonGroupProps as FlowbiteButtonGroupProps } from '@/components/flowbite-react';
export interface ButtonProps extends Omit<FlowbiteButtonProps, 'theme'> {}
export interface ButtonGroupProps
  extends Omit<FlowbiteButtonGroupProps, 'theme'> {}
