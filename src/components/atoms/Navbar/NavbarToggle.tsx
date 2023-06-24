import { FC } from 'react';
import { NavbarToggleProps } from './types';
import { Navbar as Navbar } from '@/components/flowbite-react';
import { navbarCustomTheme } from './theme';

const NavbarToggle: FC<NavbarToggleProps> = ({ children, ...props }) => {
  return (
    <Navbar.Toggle theme={navbarCustomTheme?.toggle} {...props}>
      {children}
    </Navbar.Toggle>
  );
};

export { NavbarToggle };
