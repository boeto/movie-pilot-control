import type { LabelProps as FlowbiteLabelProps } from '@/components/flowbite-react';

interface LabelCustomThemeProps {
  isRequire?: boolean;
}

interface LabelProps
  extends Omit<FlowbiteLabelProps, 'theme'>,
    LabelCustomThemeProps {}

export type { LabelCustomThemeProps, LabelProps };
