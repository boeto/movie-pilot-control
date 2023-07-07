import { FC } from 'react';

import { Footer as FlowbiteFooter } from '@/components/flowbite-react';

import { getFooterCustomTheme } from './theme';
import type { FooterBrandProps } from './types';

const FooterBrand: FC<FooterBrandProps> = ({ children, ...props }) => {
  const theme = getFooterCustomTheme()?.brand;
  return (
    <FlowbiteFooter.Brand theme={theme} {...props}>
      {children}
    </FlowbiteFooter.Brand>
  );
};

export { FooterBrand };
