import { FC } from 'react';
import { NavbarBrandProps } from './types';
import { Navbar as Navbar } from '@/components/flowbite-react';
import { navbarCustomTheme } from './theme';

const NavbarBrand: FC<NavbarBrandProps> = ({ children, ...props }) => {
  return (
    <Navbar.Brand theme={navbarCustomTheme?.brand} {...props}>
      {children}
    </Navbar.Brand>
  );
};

export { NavbarBrand };
