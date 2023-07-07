import type { CardProps as FlowbiteCardProps } from '@/components/flowbite-react';

interface CardCustomThemeProps {
  isChildrenStart?: boolean;
}

interface CardProps
  extends Omit<FlowbiteCardProps, 'theme'>,
    CardCustomThemeProps {}

export type { CardCustomThemeProps, CardProps };
