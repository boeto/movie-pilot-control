'use client';

import type { FC, MouseEvent } from 'react';
import { useEffect, useState } from 'react';
import { HiX } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';

import { removeToast, useDispatch } from '@/store';

import { getToastCustomTheme } from './theme';
import type { ToastToggleProps } from './types';

const ToastToggle: FC<ToastToggleProps> = ({
  idKey,
  // toastId,
  autoHiddenMs = 6000,
  duration,
  xIcon: XIcon = HiX,
  onClick,
  className,
  iconClassName,
  ...props
}) => {
  const theme = getToastCustomTheme().item.toggle;

  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    let durationTimerId: NodeJS.Timeout;
    let timerId: NodeJS.Timeout;
    if (!isClicked && autoHiddenMs) {
      timerId = setTimeout(() => {
        dispatch(removeToast({ idKey, duration }));
      }, autoHiddenMs);
    }
    return () => {
      clearTimeout(timerId);
      clearTimeout(durationTimerId);
    };
  }, [autoHiddenMs, isClicked, dispatch, idKey, duration]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);
    setIsClicked(true);

    dispatch(removeToast({ idKey, duration }));
  };

  return (
    <button
      aria-label="Close"
      onClick={handleClick}
      type="button"
      className={twMerge(theme?.base, className)}
      {...props}
    >
      <XIcon aria-hidden className={twMerge(theme?.icon, iconClassName)} />
    </button>
  );
};

export { ToastToggle };
