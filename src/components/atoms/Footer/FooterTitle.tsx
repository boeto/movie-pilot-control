import { FC } from 'react';

import { Footer as FlowbiteFooter } from '@/components/flowbite-react';

import { footerCustomTheme } from './theme';
import type { FooterTitleProps } from './types';

const FooterTitle: FC<FooterTitleProps> = ({ children, ...props }) => {
  return (
    <FlowbiteFooter.Title theme={footerCustomTheme?.title} {...props}>
      {children}
    </FlowbiteFooter.Title>
  );
};

export { FooterTitle };
