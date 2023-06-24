import { FC } from 'react';
import type { FooterProps } from './types';
import { Footer as FlowbiteFooter } from '@/components/flowbite-react';
import { footerCustomTheme } from './theme';
import { FooterLink } from './FooterLink';
import { FooterLinkGroup } from './FooterLinkGroup';
import { FooterDivider } from './FooterDivider';
import { FooterBrand } from './FooterBrand';
import { FooterIcon } from './FooterIcon';
import { FooterCopyright } from './FooterCopyright';
import { FooterTitle } from './FooterTitle';

const FooterComponent: FC<FooterProps> = ({ children, ...props }) => {
  return (
    <FlowbiteFooter theme={footerCustomTheme} {...props}>
      {children}
    </FlowbiteFooter>
  );
};

FooterComponent.displayName = 'Footer';
FooterLink.displayName = 'Footer.Link';
FooterLinkGroup.displayName = 'Footer.LinkGroup';
FooterCopyright.displayName = 'Footer.Copyright';
FooterBrand.displayName = 'Footer.Brand';
FooterIcon.displayName = 'Footer.Icon';
FooterTitle.displayName = 'Footer.Title';
FooterDivider.displayName = 'Footer.Divider';

export const Footer = Object.assign(FooterComponent, {
  Link: FooterLink,
  LinkGroup: FooterLinkGroup,
  Copyright: FooterCopyright,
  Brand: FooterBrand,
  Icon: FooterIcon,
  Title: FooterTitle,
  Divider: FooterDivider,
});
