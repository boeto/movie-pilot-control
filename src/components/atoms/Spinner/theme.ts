'use client';

import { CustomFlowbiteTheme } from '@/components/flowbite-react';
// import { twMerge } from 'tailwind-merge';
// import { CustomFlowbiteTheme, theme } from '@/components/flowbite-react';
// import { twOrder } from '@/utils';
// import { SpinnerCustomThemeProps } from './types';

// const spinnerDefaultTheme = theme.spinner;

const getSpinnerCustomTheme = (): //   props: SpinnerCustomThemeProps,
CustomFlowbiteTheme['spinner'] => {
  const spinnerCustomTheme = {
    base: 'inline animate-spin text-gray-200',
    color: {
      failure: 'fill-red-600',
      gray: 'fill-gray-600',
      info: 'fill-cyan-600',
      pink: 'fill-pink-600',
      purple: 'fill-purple-600',
      success: 'fill-green-500',
      warning: 'fill-yellow-400',
    },
    light: {
      off: {
        base: 'dark:text-gray-600',
        color: {
          failure: '',
          gray: 'dark:fill-gray-300',
          info: '',
          pink: '',
          purple: '',
          success: '',
          warning: '',
        },
      },
      on: {
        base: 'dark:text-gray-300',
        color: {
          failure: '',
          gray: 'dark:text-gray-600',
          info: '',
          pink: '',
          purple: '',
          success: '',
          warning: '',
        },
      },
    },
    size: {
      xs: 'w-3 h-3',
      sm: 'w-4 h-4',
      md: 'w-6 h-6',
      lg: 'w-8 h-8',
      xl: 'w-10 h-10',
    },
  };
  return spinnerCustomTheme;
};

export { getSpinnerCustomTheme };
