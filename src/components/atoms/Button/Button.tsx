'use client';

import { FC } from 'react';

import { Button as FlowbiteButton } from '@/components/flowbite-react';

import { ButtonGroup } from './ButtonGroup';
import { buttonCustomTheme } from './theme';
import type { ButtonProps } from './types';

const ButtonComponent: FC<ButtonProps> = ({
  children,
  color = 'primary',
  ...props
}) => {
  return (
    <FlowbiteButton color={color} theme={buttonCustomTheme} {...props}>
      {children}
    </FlowbiteButton>
  );
};

ButtonComponent.displayName = 'Button';
export const Button = Object.assign(ButtonComponent, {
  Group: ButtonGroup,
});
