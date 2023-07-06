import { FC } from 'react';

import { Sidebar as FlowbiteSidebar } from '@/components/flowbite-react';

import { sidebarCustomTheme } from './theme';
import { SidebarItemProps } from './types';

const SidebarItem: FC<SidebarItemProps> = ({
  children,
  isHidden = false,
  ...props
}) => {
  return isHidden ? (
    <></>
  ) : (
    <FlowbiteSidebar.Item theme={sidebarCustomTheme?.item} {...props}>
      {children}
    </FlowbiteSidebar.Item>
  );
};

export { SidebarItem };
