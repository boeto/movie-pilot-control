import { FC } from 'react';
import { NavbarLinkProps } from './types';
import { Navbar as Navbar } from '@/components/flowbite-react';
import { navbarCustomTheme } from './theme';

const NavbarLink: FC<NavbarLinkProps> = ({ children, ...props }) => {
  return (
    <Navbar.Link theme={navbarCustomTheme?.link} {...props}>
      {children}
    </Navbar.Link>
  );
};

export { NavbarLink };
