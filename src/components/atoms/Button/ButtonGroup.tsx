import { FC } from 'react';

import { Button as FlowbiteButton } from '@/components/flowbite-react';

import { getButtonGroupCustomTheme } from './theme';
import type { ButtonGroupProps } from './types';

const ButtonGroup: FC<ButtonGroupProps> = ({ children, ...props }) => {
  const theme = getButtonGroupCustomTheme();
  return (
    <FlowbiteButton.Group theme={theme} {...props}>
      {children}
    </FlowbiteButton.Group>
  );
};

export { ButtonGroup };
