import { FC } from 'react';

import { Footer as FlowbiteFooter } from '@/components/flowbite-react';

import { footerCustomTheme } from './theme';
import type { FooterBrandProps } from './types';

const FooterBrand: FC<FooterBrandProps> = ({ children, ...props }) => {
  return (
    <FlowbiteFooter.Brand theme={footerCustomTheme?.brand} {...props}>
      {children}
    </FlowbiteFooter.Brand>
  );
};

export { FooterBrand };
