import { ComponentProps, FC } from 'react';
import { HiCheck, HiExclamation, HiFire, HiX } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';

import { ColorsName, StatusWithoutDisabledName } from '@/components/types';

import { getToastCustomTheme } from './theme';
import { ToastStatusProps } from './types';

const ToastStatus: FC<ToastStatusProps> = ({
  statusColor,
  className,
  iconClassName,
}) => {
  const icons: Record<string, FC<ComponentProps<'svg'>>> = {
    [StatusWithoutDisabledName.SUCCESS]: HiCheck,
    [StatusWithoutDisabledName.ERROR]: HiX,
    [StatusWithoutDisabledName.WARNING]: HiExclamation,
    [StatusWithoutDisabledName.INFO]: HiFire,
  };

  const Icon = icons[statusColor];

  const theme = getToastCustomTheme().item.status;

  let colorClass = theme.root.color.info;
  const commonDivClass = theme.root.base;

  let statusColorName = ColorsName.CYAN;
  switch (statusColor) {
    case StatusWithoutDisabledName.SUCCESS: {
      statusColorName = ColorsName.GREEN;
      break;
    }
    case StatusWithoutDisabledName.ERROR: {
      statusColorName = ColorsName.RED;
      break;
    }
    case StatusWithoutDisabledName.WARNING: {
      statusColorName = ColorsName.ORANGE;
      break;
    }
    default: {
      break;
    }
  }

  if (statusColor !== StatusWithoutDisabledName.INFO)
    colorClass = colorClass.replace(/cyan/g, statusColorName);

  return (
    <div className={twMerge(commonDivClass, colorClass, className)}>
      <Icon className={twMerge(theme.icon, iconClassName)} />
    </div>
  );
};

export { ToastStatus };
