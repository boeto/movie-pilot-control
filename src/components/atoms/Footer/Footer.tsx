import { FC } from 'react';

import { Footer as FlowbiteFooter } from '@/components/flowbite-react';

import { FooterBrand } from './FooterBrand';
import { FooterCopyright } from './FooterCopyright';
import { FooterDivider } from './FooterDivider';
import { FooterIcon } from './FooterIcon';
import { FooterLink } from './FooterLink';
import { FooterLinkGroup } from './FooterLinkGroup';
import { FooterTitle } from './FooterTitle';
import { getFooterCustomTheme } from './theme';
import type { FooterProps } from './types';

const FooterComponent: FC<FooterProps> = ({ children, ...props }) => {
  const theme = getFooterCustomTheme();
  return (
    <FlowbiteFooter theme={theme} {...props}>
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
