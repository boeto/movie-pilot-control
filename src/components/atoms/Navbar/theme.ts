import { CustomFlowbiteTheme } from '@/components/flowbite-react';
import { twSort } from '@/utils';

const getNavbarCustomTheme = (): CustomFlowbiteTheme['navbar'] => {
  const navbarCustomTheme = {
    root: {
      base: twSort(
        'fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700',
      ),
    },
  };
  return navbarCustomTheme;
};

export { getNavbarCustomTheme };
