import { FC } from 'react';

import { Tooltip as FlowbiteTooltip } from '@/components/flowbite-react';

import { tooltipCustomTheme } from './theme';
import type { TooltipProps } from './types';

const Tooltip: FC<TooltipProps> = ({ children, ...props }) => {
  return (
    <FlowbiteTooltip theme={tooltipCustomTheme} {...props}>
      {children}
    </FlowbiteTooltip>
  );
};

Tooltip.displayName = 'Tooltip';

export { Tooltip };
