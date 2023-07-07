import { FC } from 'react';

import { Dropdown as FlowbiteDropdown } from '@/components/flowbite-react';

import { DropdownDivider } from './DropdownDivider';
import { DropdownHeader } from './DropdownHeader';
import { DropdownItem } from './DropdownItem';
import { getDropdownCustomTheme } from './theme';
import type { DropdownComponentProps } from './types';

const DropdownComponent: FC<DropdownComponentProps> = ({
  children,
  ...props
}) => {
  const theme = getDropdownCustomTheme();
  return (
    <FlowbiteDropdown theme={theme} {...props}>
      {children}
    </FlowbiteDropdown>
  );
};

DropdownComponent.displayName = 'Dropdown';
DropdownItem.displayName = 'Dropdown.Item';
DropdownHeader.displayName = 'Dropdown.Header';
DropdownDivider.displayName = 'Dropdown.Divider';

export const Dropdown = Object.assign(DropdownComponent, {
  Item: DropdownItem,
  Header: DropdownHeader,
  Divider: DropdownDivider,
});
