import type { CardProps as FlowbiteCardProps } from '@/components/flowbite-react';
export interface CardProps extends Omit<FlowbiteCardProps, 'theme'> {}
