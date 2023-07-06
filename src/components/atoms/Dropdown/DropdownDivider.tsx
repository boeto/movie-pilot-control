import { FC } from 'react';

import { Dropdown as FlowbiteDropdown } from '@/components/flowbite-react';

import type { DropdownDividerProps } from './types';

const DropdownDivider: FC<DropdownDividerProps> = ({ children, ...props }) => {
  return (
    <FlowbiteDropdown.Divider {...props}>{children}</FlowbiteDropdown.Divider>
  );
};

export { DropdownDivider };
