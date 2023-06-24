import { FC } from 'react';
import { NavbarCollapseProps } from './types';
import { Navbar as Navbar } from '@/components/flowbite-react';
import { navbarCustomTheme } from './theme';

const NavbarCollapse: FC<NavbarCollapseProps> = ({ children, ...props }) => {
  return (
    <Navbar.Collapse theme={navbarCustomTheme?.collapse} {...props}>
      {children}
    </Navbar.Collapse>
  );
};

export { NavbarCollapse };
