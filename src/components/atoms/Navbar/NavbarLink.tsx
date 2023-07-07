import { FC } from 'react';

import { Navbar } from '@/components/flowbite-react';

import { getNavbarCustomTheme } from './theme';
import { NavbarLinkProps } from './types';

const NavbarLink: FC<NavbarLinkProps> = ({ children, ...props }) => {
  const theme = getNavbarCustomTheme()?.link;
  return (
    <Navbar.Link theme={theme} {...props}>
      {children}
    </Navbar.Link>
  );
};

export { NavbarLink };
