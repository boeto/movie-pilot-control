import { FC } from 'react';
import type { DropdownItemProps } from './types';
import { Dropdown as FlowbiteDropdown } from '@/components/flowbite-react';
import { dropdownCustomTheme } from './theme';

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
