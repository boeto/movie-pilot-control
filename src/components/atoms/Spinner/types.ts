import type { SpinnerProps as FlowbiteSpinnerProps } from '@/components/flowbite-react';

interface SpinnerCustomThemeProps {}

interface SpinnerProps
  extends Omit<FlowbiteSpinnerProps, 'theme'>,
    SpinnerCustomThemeProps {}

export type { SpinnerCustomThemeProps, SpinnerProps };
