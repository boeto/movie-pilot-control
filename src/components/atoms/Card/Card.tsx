'use client';

import { FC } from 'react';

import { Card as FlowbiteCard } from '@/components/flowbite-react';

import { getCardCustomTheme } from './theme';
import type { CardProps } from './types';

const Card: FC<CardProps> = ({ children, childrenClassName, ...props }) => {
  return (
    <FlowbiteCard theme={getCardCustomTheme({ childrenClassName })} {...props}>
      {children}
    </FlowbiteCard>
  );
};

Card.displayName = 'Card';

export { Card };
