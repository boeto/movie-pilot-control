import { FC } from 'react';
import type { LabelProps } from './types';
import { Label as FlowbiteLabel } from '@/components/flowbite-react';
import { labelCustomTheme } from './theme';

const Label: FC<LabelProps> = ({ children, ...props }) => {
  return (
    <FlowbiteLabel theme={labelCustomTheme} {...props}>
      {children}
    </FlowbiteLabel>
  );
};

Label.displayName = 'Label';

export { Label };
