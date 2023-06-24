import { FC } from 'react';
import type { DropdownDividerProps } from './types';
import { Dropdown as FlowbiteDropdown } from '@/components/flowbite-react';

const DropdownDivider: FC<DropdownDividerProps> = ({ children, ...props }) => {
  return (
    <FlowbiteDropdown.Divider {...props}>{children}</FlowbiteDropdown.Divider>
  );
};

export { DropdownDivider };
