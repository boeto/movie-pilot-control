'use client';

import { FC } from 'react';

import { Button as FlowbiteButton } from '@/components/flowbite-react';

import { ButtonGroup } from './ButtonGroup';
import { getButtonCustomTheme } from './theme';
import type { ButtonProps } from './types';

const ButtonComponent: FC<ButtonProps> = ({
  children,
  color = 'primary',
  ...props
}) => {
  const theme = getButtonCustomTheme();
  return (
    <FlowbiteButton color={color} theme={theme} {...props}>
      {children}
    </FlowbiteButton>
  );
};

ButtonComponent.displayName = 'Button';
export const Button = Object.assign(ButtonComponent, {
  Group: ButtonGroup,
});
