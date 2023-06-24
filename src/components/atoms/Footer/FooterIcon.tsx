import { FC } from 'react';
import type { FooterIconProps } from './types';
import { Footer as FlowbiteFooter } from '@/components/flowbite-react';
import { footerCustomTheme } from './theme';

const FooterIcon: FC<FooterIconProps> = ({ children, ...props }) => {
  return (
    <FlowbiteFooter.Icon theme={footerCustomTheme?.icon} {...props}>
      {children}
    </FlowbiteFooter.Icon>
  );
};

export { FooterIcon };
