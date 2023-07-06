import { FC } from 'react';

import { HelperText as FlowbiteHelperText } from '@/components/flowbite-react';

import { helperTextCustomTheme } from './theme';
import type { HelperTextProps } from './types';

const HelperText: FC<HelperTextProps> = ({ children, ...props }) => {
  return (
    <FlowbiteHelperText theme={helperTextCustomTheme} {...props}>
      {children}
    </FlowbiteHelperText>
  );
};

HelperText.displayName = 'HelperText';

export { HelperText };
