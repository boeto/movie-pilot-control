import { FC } from 'react';
import type { DropdownHeaderProps } from './types';
import { Dropdown as FlowbiteDropdown } from '@/components/flowbite-react';

const DropdownHeader: FC<DropdownHeaderProps> = ({ children, ...props }) => {
  return (
    <FlowbiteDropdown.Header {...props}>{children}</FlowbiteDropdown.Header>
  );
};

export { DropdownHeader };
