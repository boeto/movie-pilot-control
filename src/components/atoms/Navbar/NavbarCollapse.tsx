import { FC } from 'react';

import { Navbar } from '@/components/flowbite-react';

import { navbarCustomTheme } from './theme';
import { NavbarCollapseProps } from './types';

const NavbarCollapse: FC<NavbarCollapseProps> = ({ children, ...props }) => {
  return (
    <Navbar.Collapse theme={navbarCustomTheme?.collapse} {...props}>
      {children}
    </Navbar.Collapse>
  );
};

export { NavbarCollapse };
