import type { HelperTextProps as FlowbiteHelperTextProps } from '@/components/flowbite-react';

export interface HelperTextProps
  extends Omit<FlowbiteHelperTextProps, 'theme'> {}
