import { ComponentSizeName } from '../../components.types';
import { CardProps } from '@/components/flowbite-react';

export enum CardSizeName {
  LARGE = ComponentSizeName.LARGE,
}
export interface CardsProps extends CardProps {
  size: CardSizeName;
}
