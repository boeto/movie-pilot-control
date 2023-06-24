import { FC } from 'react';
import type { CardProps } from './types';
import { Card as FlowbiteCard } from '@/components/flowbite-react';
import { cardCustomTheme } from './theme';

const Card: FC<CardProps> = ({ children, ...props }) => {
  return (
    <FlowbiteCard theme={cardCustomTheme} {...props}>
      {children}
    </FlowbiteCard>
  );
};

Card.displayName = 'Card';

export { Card };
