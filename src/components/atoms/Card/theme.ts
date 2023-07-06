'use client';

import { twMerge } from 'tailwind-merge';

import { CustomFlowbiteTheme, theme } from '@/components/flowbite-react';

import { CardCustomThemeProps } from './types';

const cardDefaultTheme = theme.card;

const getCardCustomTheme = (
  props: CardCustomThemeProps,
): CustomFlowbiteTheme['card'] => {
  const cardCustomTheme = {
    root: {
      children: twMerge(theme.card.root.children, props.childrenClassName),
    },
  };

  return cardCustomTheme;
};

export { cardDefaultTheme, getCardCustomTheme };
