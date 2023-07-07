import { FC } from 'react';

import { Footer as FlowbiteFooter } from '@/components/flowbite-react';

import { getFooterCustomTheme } from './theme';
import type { FooterLinkProps } from './types';

const FooterLink: FC<FooterLinkProps> = ({ children, ...props }) => {
  const theme = getFooterCustomTheme()?.groupLink?.link;
  return (
    <FlowbiteFooter.Link theme={theme} {...props}>
      {children}
    </FlowbiteFooter.Link>
  );
};

FooterLink.displayName = 'FooterLink';

export { FooterLink };
