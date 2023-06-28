'use client';

import { FC } from 'react';
import type { ButtonProps } from './types';
import { Button as FlowbiteButton } from '@/components/flowbite-react';
import { buttonCustomTheme } from './theme';
import { ButtonGroup } from './ButtonGroup';

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
