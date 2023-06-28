import { FC } from 'react';
import type { HelperTextProps } from './types';
import { HelperText as FlowbiteHelperText } from '@/components/flowbite-react';
import { helperTextCustomTheme } from './theme';

const HelperText: FC<HelperTextProps> = ({ children, ...props }) => {
  return (
    <FlowbiteHelperText theme={helperTextCustomTheme} {...props}>
      {children}
    </FlowbiteHelperText>
  );
};

HelperText.displayName = 'HelperText';

export { HelperText };
