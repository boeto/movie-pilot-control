import { FC } from 'react';
import type { FooterLinkProps } from './types';
import { Footer as FlowbiteFooter } from '@/components/flowbite-react';
import { footerCustomTheme } from './theme';

const FooterLink: FC<FooterLinkProps> = ({ children, ...props }) => {
  return (
    <FlowbiteFooter.Link theme={footerCustomTheme?.groupLink?.link} {...props}>
      {children}
    </FlowbiteFooter.Link>
  );
};

FooterLink.displayName = 'FooterLink';

export { FooterLink };
