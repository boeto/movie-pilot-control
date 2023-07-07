import { FC } from 'react';

import { Navbar } from '@/components/flowbite-react';

import { getNavbarCustomTheme } from './theme';
import { NavbarCollapseProps } from './types';

const NavbarCollapse: FC<NavbarCollapseProps> = ({ children, ...props }) => {
  const theme = getNavbarCustomTheme()?.collapse;
  return (
    <Navbar.Collapse theme={theme} {...props}>
      {children}
    </Navbar.Collapse>
  );
};

export { NavbarCollapse };
