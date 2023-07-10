import { ComponentProps, FC, MouseEventHandler } from 'react';

import { Duration, StatusWithoutDisabledName } from '@/components/types';

interface ToastToggleCustomThemeProps {}
interface ToastCustomThemeProps {}

interface ToastStatusProps {
  statusColor: StatusWithoutDisabledName;
  className?: string;
  iconClassName?: string;
}

interface ToastToggleProps extends ToastToggleCustomThemeProps {
  idKey: string;
  // toastId?: number;

  duration: Duration;
  autoHiddenMs?: number;
  className?: string;
  iconClassName?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  xIcon?: FC<ComponentProps<'svg'>>;
}

interface ToastProps extends ToastCustomThemeProps {}

export type {
  ToastCustomThemeProps,
  ToastProps,
  ToastStatusProps,
  ToastToggleProps,
};
