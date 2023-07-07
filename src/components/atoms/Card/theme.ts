'use client';

import { twMerge } from 'tailwind-merge';

import { CustomFlowbiteTheme, theme } from '@/components/flowbite-react';

import { CardCustomThemeProps } from './types';

const cardDefaultTheme = theme.card;

const getCardCustomTheme = (
  customTheme: CardCustomThemeProps,
): CustomFlowbiteTheme['card'] => {
  const cardCustomTheme = {
    root: {
      children: twMerge(
        theme.card.root.children,
        customTheme.isChildrenStart ? 'justify-start' : '',
      ),
    },
  };

  return cardCustomTheme;
};

export { cardDefaultTheme, getCardCustomTheme };
