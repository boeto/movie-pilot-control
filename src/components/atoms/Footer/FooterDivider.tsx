import { FC } from 'react';

import { Footer as FlowbiteFooter } from '@/components/flowbite-react';

import { getFooterCustomTheme } from './theme';
import type { FooterDividerProps } from './types';

const FooterDivider: FC<FooterDividerProps> = ({ children, ...props }) => {
  const theme = getFooterCustomTheme()?.divider;
  return (
    <FlowbiteFooter.Divider theme={theme} {...props}>
      {children}
    </FlowbiteFooter.Divider>
  );
};

export { FooterDivider };
