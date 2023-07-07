import { FC } from 'react';

import { Footer as FlowbiteFooter } from '@/components/flowbite-react';

import { getFooterCustomTheme } from './theme';
import type { FooterLinkGroupProps } from './types';

const FooterLinkGroup: FC<FooterLinkGroupProps> = ({ children, ...props }) => {
  const theme = getFooterCustomTheme()?.groupLink;
  return (
    <FlowbiteFooter.LinkGroup theme={theme} {...props}>
      {children}
    </FlowbiteFooter.LinkGroup>
  );
};

export { FooterLinkGroup };
