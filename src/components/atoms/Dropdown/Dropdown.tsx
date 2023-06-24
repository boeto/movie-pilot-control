import { FC } from 'react';
import type { DropdownComponentProps } from './types';
import { Dropdown as FlowbiteDropdown } from '@/components/flowbite-react';
import { dropdownCustomTheme } from './theme';
import { DropdownItem } from './DropdownItem';
import { DropdownHeader } from './DropdownHeader';
import { DropdownDivider } from './DropdownDivider';

const DropdownComponent: FC<DropdownComponentProps> = ({
  children,
  ...props
}) => {
  return (
    <FlowbiteDropdown theme={dropdownCustomTheme} {...props}>
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
