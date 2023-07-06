import { FC } from 'react';

import { Navbar } from '@/components/flowbite-react';

import { navbarCustomTheme } from './theme';
import { NavbarBrandProps } from './types';

const NavbarBrand: FC<NavbarBrandProps> = ({ children, ...props }) => {
  return (
    <Navbar.Brand theme={navbarCustomTheme?.brand} {...props}>
      {children}
    </Navbar.Brand>
  );
};

export { NavbarBrand };
