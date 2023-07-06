import { FC } from 'react';

import { Dropdown as FlowbiteDropdown } from '@/components/flowbite-react';

import { dropdownCustomTheme } from './theme';
import type { DropdownItemProps } from './types';

const DropdownItem: FC<DropdownItemProps> = ({ children, ...props }) => {
  return (
    <FlowbiteDropdown.Item
      theme={dropdownCustomTheme?.floating?.item}
      {...props}
    >
      {children}
    </FlowbiteDropdown.Item>
  );
};

export { DropdownItem };
