import { FC } from 'react';
import type { FooterCopyrightProps } from './types';
import { Footer as FlowbiteFooter } from '@/components/flowbite-react';
import { footerCustomTheme } from './theme';

const FooterCopyright: FC<FooterCopyrightProps> = ({ children, ...props }) => {
  return (
    <FlowbiteFooter.Copyright theme={footerCustomTheme?.copyright} {...props}>
      {children}
    </FlowbiteFooter.Copyright>
  );
};

export { FooterCopyright };
