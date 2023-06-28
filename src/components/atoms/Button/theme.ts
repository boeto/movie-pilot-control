import { CustomFlowbiteTheme } from 'flowbite-react';

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

const buttonGroupCustomTheme: CustomFlowbiteTheme['buttonGroup'] = {};

export { buttonCustomTheme, buttonGroupCustomTheme };
