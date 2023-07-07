import { FC } from 'react';

import { HelperText as FlowbiteHelperText } from '@/components/flowbite-react';

import { getHelperTextCustomTheme } from './theme';
import type { HelperTextProps } from './types';

const HelperText: FC<HelperTextProps> = ({ children, ...props }) => {
  const theme = getHelperTextCustomTheme();
  return (
    <FlowbiteHelperText theme={theme} {...props}>
      {children}
    </FlowbiteHelperText>
  );
};

HelperText.displayName = 'HelperText';

export { HelperText };
