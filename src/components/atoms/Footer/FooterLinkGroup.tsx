import { FC } from 'react';
import type { FooterLinkGroupProps } from './types';
import { Footer as FlowbiteFooter } from '@/components/flowbite-react';
import { footerCustomTheme } from './theme';

const FooterLinkGroup: FC<FooterLinkGroupProps> = ({ children, ...props }) => {
  return (
    <FlowbiteFooter.LinkGroup theme={footerCustomTheme?.groupLink} {...props}>
      {children}
    </FlowbiteFooter.LinkGroup>
  );
};

export { FooterLinkGroup };
