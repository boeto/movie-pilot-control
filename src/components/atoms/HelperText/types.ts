import type { HelperTextProps as FlowbiteHelperTextProps } from '@/components/flowbite-react';

interface HelperTextCustomThemeProps {}

interface HelperTextProps
  extends Omit<FlowbiteHelperTextProps, 'theme'>,
    HelperTextCustomThemeProps {}

export type { HelperTextCustomThemeProps, HelperTextProps };
