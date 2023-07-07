import { CustomFlowbiteTheme } from '@/components/flowbite-react';
import { twSort } from '@/utils';

const getSidebarCustomTheme = (): CustomFlowbiteTheme['sidebar'] => {
  const sidebarCustomTheme = {
    root: {
      base: twSort(
        'flex fixed top-0 left-0 z-20 flex-col flex-shrink-0 pt-16 h-full duration-75 border-r border-gray-200 lg:flex transition-width dark:border-gray-700',
      ),
    },
  };

  return sidebarCustomTheme;
};

export { getSidebarCustomTheme };
