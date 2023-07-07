import { twMerge } from 'tailwind-merge';

import { CustomFlowbiteTheme, theme } from '@/components/flowbite-react';
import { twSort } from '@/utils';

const getDropdownCustomTheme = (): CustomFlowbiteTheme['dropdown'] => {
  const dropdownCustomTheme = {
    floating: {
      base: twMerge(theme.dropdown.floating.base, 'rounded-xl'),
      content: twMerge(
        theme.dropdown.floating.content,
        twSort('rounded-xl py-0'),
      ),
      target: twMerge(theme.dropdown.floating.target, 'dark:text-white'),
    },
    content: twMerge(theme.dropdown.content, 'py-0'),
  };
  return dropdownCustomTheme;
};

export { getDropdownCustomTheme };
