import { FC } from 'react';
import type { FooterTitleProps } from './types';
import { Footer as FlowbiteFooter } from '@/components/flowbite-react';
import { footerCustomTheme } from './theme';

const FooterTitle: FC<FooterTitleProps> = ({ children, ...props }) => {
  return (
    <FlowbiteFooter.Title theme={footerCustomTheme?.title} {...props}>
      {children}
    </FlowbiteFooter.Title>
  );
};

export { FooterTitle };
