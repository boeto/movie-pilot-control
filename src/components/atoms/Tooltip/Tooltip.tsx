import { FC } from 'react';

import { Tooltip as FlowbiteTooltip } from '@/components/flowbite-react';

import { getTooltipCustomTheme } from './theme';
import type { TooltipProps } from './types';

const Tooltip: FC<TooltipProps> = ({ children, ...props }) => {
  const theme = getTooltipCustomTheme();
  return (
    <FlowbiteTooltip theme={theme} {...props}>
      {children}
    </FlowbiteTooltip>
  );
};

Tooltip.displayName = 'Tooltip';

export { Tooltip };
