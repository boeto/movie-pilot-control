import { FC } from 'react';
import type { FooterBrandProps } from './types';
import { Footer as FlowbiteFooter } from '@/components/flowbite-react';
import { footerCustomTheme } from './theme';

const FooterBrand: FC<FooterBrandProps> = ({ children, ...props }) => {
  return (
    <FlowbiteFooter.Brand theme={footerCustomTheme?.brand} {...props}>
      {children}
    </FlowbiteFooter.Brand>
  );
};

export { FooterBrand };
