import { FC } from 'react';

import { Footer as FlowbiteFooter } from '@/components/flowbite-react';

import { footerCustomTheme } from './theme';
import type { FooterLinkGroupProps } from './types';

const FooterLinkGroup: FC<FooterLinkGroupProps> = ({ children, ...props }) => {
  return (
    <FlowbiteFooter.LinkGroup theme={footerCustomTheme?.groupLink} {...props}>
      {children}
    </FlowbiteFooter.LinkGroup>
  );
};

export { FooterLinkGroup };
