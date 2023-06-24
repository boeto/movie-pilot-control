import { FC } from 'react';
import type { TooltipProps } from './types';
import { Tooltip as FlowbiteTooltip } from '@/components/flowbite-react';
import { tooltipCustomTheme } from './theme';

const Tooltip: FC<TooltipProps> = ({ children, ...props }) => {
  return (
    <FlowbiteTooltip theme={tooltipCustomTheme} {...props}>
      {children}
    </FlowbiteTooltip>
  );
};

Tooltip.displayName = 'Tooltip';

export { Tooltip };
