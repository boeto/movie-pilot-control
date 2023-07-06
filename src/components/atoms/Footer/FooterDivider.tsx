import { FC } from 'react';

import { Footer as FlowbiteFooter } from '@/components/flowbite-react';

import { footerCustomTheme } from './theme';
import type { FooterDividerProps } from './types';

const FooterDivider: FC<FooterDividerProps> = ({ children, ...props }) => {
  return (
    <FlowbiteFooter.Divider theme={footerCustomTheme?.divider} {...props}>
      {children}
    </FlowbiteFooter.Divider>
  );
};

export { FooterDivider };
