import { FC } from 'react';

import { Footer as FlowbiteFooter } from '@/components/flowbite-react';

import { getFooterCustomTheme } from './theme';
import type { FooterTitleProps } from './types';

const FooterTitle: FC<FooterTitleProps> = ({ children, ...props }) => {
  const theme = getFooterCustomTheme()?.title;
  return (
    <FlowbiteFooter.Title theme={theme} {...props}>
      {children}
    </FlowbiteFooter.Title>
  );
};

export { FooterTitle };
