import { CustomFlowbiteTheme } from 'flowbite-react';

const sidebarCustomTheme: CustomFlowbiteTheme['sidebar'] = {
  root: {
    base: 'flex fixed top-0 left-0 z-20 flex-col flex-shrink-0 pt-16 h-full duration-75 border-r border-gray-200 lg:flex transition-width dark:border-gray-700',
  },
};

export { sidebarCustomTheme };
