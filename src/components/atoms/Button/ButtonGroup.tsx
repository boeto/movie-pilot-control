import { FC } from 'react';
import type { ButtonGroupProps } from './types';
import { Button as FlowbiteButton } from '@/components/flowbite-react';
import { buttonGroupCustomTheme } from './theme';

const ButtonGroup: FC<ButtonGroupProps> = ({ children, ...props }) => {
  return (
    <FlowbiteButton.Group theme={buttonGroupCustomTheme} {...props}>
      {children}
    </FlowbiteButton.Group>
  );
};

export { ButtonGroup };
