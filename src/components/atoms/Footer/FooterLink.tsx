import { FC } from 'react';

import { Footer as FlowbiteFooter } from '@/components/flowbite-react';

import { footerCustomTheme } from './theme';
import type { FooterLinkProps } from './types';

const FooterLink: FC<FooterLinkProps> = ({ children, ...props }) => {
  return (
    <FlowbiteFooter.Link theme={footerCustomTheme?.groupLink?.link} {...props}>
      {children}
    </FlowbiteFooter.Link>
  );
};

FooterLink.displayName = 'FooterLink';

export { FooterLink };
