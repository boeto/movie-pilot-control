import type { NavbarComponentProps } from './types';
import { FC } from 'react';
import { Navbar as FlowbiteNavbar } from '@/components/flowbite-react';
import { navbarCustomTheme } from './theme';
import { NavbarBrand } from './NavbarBrand';
import { NavbarCollapse } from './NavbarCollapse';
import { NavbarLink } from './NavbarLink';
import { NavbarToggle } from './NavbarToggle';

const NavbarComponent: FC<NavbarComponentProps> = ({ children, ...props }) => {
  return (
    <FlowbiteNavbar theme={navbarCustomTheme?.root} {...props}>
      {children}
    </FlowbiteNavbar>
  );
};

NavbarComponent.displayName = 'Navbar';
NavbarBrand.displayName = 'Navbar.Brand';
NavbarCollapse.displayName = 'Navbar.Collapse';
NavbarLink.displayName = 'Navbar.Link';
NavbarToggle.displayName = 'Navbar.Toggle';

export const Navbar = Object.assign(NavbarComponent, {
  Brand: NavbarBrand,
  Collapse: NavbarCollapse,
  Link: NavbarLink,
  Toggle: NavbarToggle,
});
