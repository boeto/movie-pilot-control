import { twMerge } from 'tailwind-merge';

import { CustomFlowbiteTheme, theme } from '@/components/flowbite-react';
import { twSort } from '@/utils';

const getTextareaCustomTheme = (): CustomFlowbiteTheme['textarea'] => {
  const textareaCustomTheme = {
    base: twMerge(theme.textInput.base, twSort('p-4 text-sm')),
  };
  return textareaCustomTheme;
};

export { getTextareaCustomTheme };
