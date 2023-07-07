'use client';

import { CustomFlowbiteTheme } from '@/components/flowbite-react';

const getSpinnerCustomTheme = (): CustomFlowbiteTheme['spinner'] => {
  const spinnerCustomTheme = {
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
  };
  return spinnerCustomTheme;
};

export { getSpinnerCustomTheme };
