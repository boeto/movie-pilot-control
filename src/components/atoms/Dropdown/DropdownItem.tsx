import { FC } from 'react';

import { Dropdown as FlowbiteDropdown } from '@/components/flowbite-react';

import { getDropdownCustomTheme } from './theme';
import type { DropdownItemProps } from './types';

const DropdownItem: FC<DropdownItemProps> = ({ children, ...props }) => {
  const theme = getDropdownCustomTheme()?.floating?.item;
  return (
    <FlowbiteDropdown.Item theme={theme} {...props}>
      {children}
    </FlowbiteDropdown.Item>
  );
};

export { DropdownItem };
