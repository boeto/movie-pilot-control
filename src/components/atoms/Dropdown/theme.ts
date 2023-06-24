import { CustomFlowbiteTheme } from 'flowbite-react';

const dropdownCustomTheme: CustomFlowbiteTheme['dropdown'] = {
  floating: {
    base: 'z-10 w-fit rounded-xl divide-y divide-gray-100 shadow',
    content: 'rounded-xl text-sm text-gray-700 dark:text-gray-200',
    target: 'w-fit dark:text-white',
  },
  content: '',
};

export { dropdownCustomTheme };
