import { FC } from 'react';

import { Sidebar as FlowbiteSidebar } from '@/components/flowbite-react';

import { getSidebarCustomTheme } from './theme';
import { SidebarItemProps } from './types';

const SidebarItem: FC<SidebarItemProps> = ({
  children,
  isHidden = false,
  ...props
}) => {
  const theme = getSidebarCustomTheme()?.item;

  return isHidden ? (
    <></>
  ) : (
    <FlowbiteSidebar.Item theme={theme} {...props}>
      {children}
    </FlowbiteSidebar.Item>
  );
};

export { SidebarItem };
