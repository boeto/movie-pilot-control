import { FC } from 'react';

import { Navbar } from '@/components/flowbite-react';

import { getNavbarCustomTheme } from './theme';
import { NavbarBrandProps } from './types';

const NavbarBrand: FC<NavbarBrandProps> = ({ children, ...props }) => {
  const theme = getNavbarCustomTheme()?.brand;
  return (
    <Navbar.Brand theme={theme} {...props}>
      {children}
    </Navbar.Brand>
  );
};

export { NavbarBrand };
