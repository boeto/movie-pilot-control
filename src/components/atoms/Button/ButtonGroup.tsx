import { FC } from 'react';

import { Button as FlowbiteButton } from '@/components/flowbite-react';

import { buttonGroupCustomTheme } from './theme';
import type { ButtonGroupProps } from './types';

const ButtonGroup: FC<ButtonGroupProps> = ({ children, ...props }) => {
  return (
    <FlowbiteButton.Group theme={buttonGroupCustomTheme} {...props}>
      {children}
    </FlowbiteButton.Group>
  );
};

export { ButtonGroup };
