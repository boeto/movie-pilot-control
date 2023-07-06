import { FC } from 'react';

import { Dropdown as FlowbiteDropdown } from '@/components/flowbite-react';

import type { DropdownHeaderProps } from './types';

const DropdownHeader: FC<DropdownHeaderProps> = ({ children, ...props }) => {
  return (
    <FlowbiteDropdown.Header {...props}>{children}</FlowbiteDropdown.Header>
  );
};

export { DropdownHeader };
