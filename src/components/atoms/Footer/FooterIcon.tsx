import { FC } from 'react';

import { Footer as FlowbiteFooter } from '@/components/flowbite-react';

import { getFooterCustomTheme } from './theme';
import type { FooterIconProps } from './types';

const FooterIcon: FC<FooterIconProps> = ({ children, ...props }) => {
  const theme = getFooterCustomTheme()?.icon;
  return (
    <FlowbiteFooter.Icon theme={theme} {...props}>
      {children}
    </FlowbiteFooter.Icon>
  );
};

export { FooterIcon };
