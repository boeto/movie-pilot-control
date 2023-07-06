'use client';

import { twMerge } from 'tailwind-merge';

import { CustomFlowbiteTheme, theme } from '@/components/flowbite-react';
import { twSort } from '@/utils';

import { LabelCustomThemeProps } from './types';

const labelDefaultTheme = theme.label;

const getLabelCustomTheme = (
  props: LabelCustomThemeProps,
): CustomFlowbiteTheme['label'] => {
  const labelCustomTheme = {
    root: {
      base: twMerge(
        labelDefaultTheme.root.base,
        props.isRequire
          ? twSort(
              "after:ml-0.5 after:text-red-700 after:content-['*'] after:dark:text-red-500 ",
            )
          : '',
      ),
    },
  };
  return labelCustomTheme;
};

export { getLabelCustomTheme };
