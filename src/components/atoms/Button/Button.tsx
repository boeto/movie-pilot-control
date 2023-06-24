'use client';
import {
  CustomFlowbiteTheme,
  Button as FlowbiteButton,
} from '@/components/flowbite-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

import React, { FC } from 'react';
import { ButtonProps } from './types';

const buttonCustomTheme: CustomFlowbiteTheme['button'] = {
  color: {
    primary:
      'text-white bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800',
  },
  outline: {
    on: 'transition-all duration-75 ease-in group-hover:bg-opacity-0 group-hover:text-inherit',
  },
  size: {
    md: 'text-sm px-3 py-2',
  },
};

const Button: FC<ButtonProps> = ({
  children,
  color = 'primary',
  // onClick,
  ...props
}) => {
  // const className = `button button-${color}`;
  const onClickHandler = () => {
    console.log('Button onClickHandler');
  };

  return (
    <FlowbiteButton
      // className={className}
      color={color}
      theme={buttonCustomTheme}
      onClick={onClickHandler}
      {...props}
    >
      {children}
    </FlowbiteButton>
  );
};

export { Button };
