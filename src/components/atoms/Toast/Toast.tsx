'use client';

import { FC } from 'react';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

import { findPath } from '@/common';
import { durationClasses } from '@/components/types';
import { selectMessage, useSelector } from '@/store';

import { getToastCustomTheme } from './theme';
import { ToastStatus } from './ToastStatus';
import { ToastToggle } from './ToastToggle';
import { ToastProps } from './types';

const Toast: FC<ToastProps> = () => {
  const theme = getToastCustomTheme();

  const { toast } = useSelector(selectMessage);

  const idKeys = Object.keys(toast);

  const pathname = usePathname();
  const isTopWithoutNav = pathname.includes(findPath('authLogin', 'auth'));

  return idKeys.length > 0 ? (
    <ul
      className={twMerge(
        theme.root.base,
        isTopWithoutNav ? theme.root.topWithoutNav : '',
      )}
    >
      {idKeys.map((idKey) => {
        const {
          message,
          // toastId,
          duration,
          statusColor,
          isSlideIn,
          isClosed,
          isRemoved,
          className,
        } = toast[idKey];

        const withTransitionClass = twMerge(
          theme.transition,
          durationClasses[duration],
          isRemoved && theme.removed,
        );

        return (
          <li
            key={idKey}
            data-testid="flowbite-toast"
            className={twMerge(
              theme.item.root.base,
              withTransitionClass,
              isSlideIn && theme.item.root.slideIn,
              isClosed && theme.item.root.closed,
              className,
            )}
          >
            <ToastStatus
              statusColor={statusColor}
              className={withTransitionClass}
              iconClassName={withTransitionClass}
            />
            <div className={twMerge(theme.item.content, withTransitionClass)}>
              {message}
            </div>
            <ToastToggle
              idKey={idKey}
              // toastId={toastId}
              duration={duration}
              className={withTransitionClass}
              iconClassName={withTransitionClass}
            />
          </li>
        );
      })}
    </ul>
  ) : (
    <></>
  );
};

export { Toast };
