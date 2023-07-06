import type { CardProps as FlowbiteCardProps } from '@/components/flowbite-react';

interface CardCustomThemeProps {
  childrenClassName?: string;
}

interface CardProps
  extends Omit<FlowbiteCardProps, 'theme'>,
    CardCustomThemeProps {}

export type { CardCustomThemeProps, CardProps };
