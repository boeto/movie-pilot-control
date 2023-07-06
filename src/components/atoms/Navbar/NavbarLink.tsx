import { FC } from 'react';

import { Navbar } from '@/components/flowbite-react';

import { navbarCustomTheme } from './theme';
import { NavbarLinkProps } from './types';

const NavbarLink: FC<NavbarLinkProps> = ({ children, ...props }) => {
  return (
    <Navbar.Link theme={navbarCustomTheme?.link} {...props}>
      {children}
    </Navbar.Link>
  );
};

export { NavbarLink };
