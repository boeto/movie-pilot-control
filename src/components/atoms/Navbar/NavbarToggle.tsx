import { FC } from 'react';

import { Navbar } from '@/components/flowbite-react';

import { getNavbarCustomTheme } from './theme';
import { NavbarToggleProps } from './types';

const NavbarToggle: FC<NavbarToggleProps> = ({ children, ...props }) => {
  const theme = getNavbarCustomTheme()?.toggle;
  return (
    <Navbar.Toggle theme={theme} {...props}>
      {children}
    </Navbar.Toggle>
  );
};

export { NavbarToggle };
