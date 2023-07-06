import { FC } from 'react';

import { Spinner as FlowbiteSpinner } from '@/components/flowbite-react';

import { getSpinnerCustomTheme } from './theme';
import type { SpinnerProps } from './types';

const Spinner: FC<SpinnerProps> = ({ children, ...props }) => {
  return (
    <FlowbiteSpinner theme={getSpinnerCustomTheme()} {...props}>
      {children}
    </FlowbiteSpinner>
  );
};

Spinner.displayName = 'Spinner';

export { Spinner };
