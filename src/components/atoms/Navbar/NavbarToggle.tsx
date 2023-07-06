import { FC } from 'react';

import { Navbar } from '@/components/flowbite-react';

import { navbarCustomTheme } from './theme';
import { NavbarToggleProps } from './types';

const NavbarToggle: FC<NavbarToggleProps> = ({ children, ...props }) => {
  return (
    <Navbar.Toggle theme={navbarCustomTheme?.toggle} {...props}>
      {children}
    </Navbar.Toggle>
  );
};

export { NavbarToggle };
