import { FC } from 'react';

import { Footer as FlowbiteFooter } from '@/components/flowbite-react';

import { getFooterCustomTheme } from './theme';
import type { FooterCopyrightProps } from './types';

const FooterCopyright: FC<FooterCopyrightProps> = ({ children, ...props }) => {
  const theme = getFooterCustomTheme()?.copyright;
  return (
    <FlowbiteFooter.Copyright theme={theme} {...props}>
      {children}
    </FlowbiteFooter.Copyright>
  );
};

export { FooterCopyright };
