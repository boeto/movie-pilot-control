// import type { ComponentProps, FC, PropsWithChildren } from 'react';
// import type { DeepPartial } from '../../';
// import type { Duration } from './ToastContext';
// export interface FlowbiteToastTheme {
//   root: {
//     base: string;
//     closed: string;
//     removed: string;
//   };
//   toggle: {
//     base: string;
//     icon: string;
//   };
// }
// export interface ToastProps extends PropsWithChildren<ComponentProps<'div'>> {
//   duration?: Duration;
//   theme?: DeepPartial<FlowbiteToastTheme>;
// }
// export declare const Toast: FC<ToastProps> & {
//   Toggle: FC<import('./ToastToggle').ToastToggleProps>;
// };

import { ComponentStatusName } from '../../components.types';
import { ToastProps } from '@/components/flowbite-react';

export enum StatusToastName {
  ERROR = ComponentStatusName.ERROR,
  SUCCESS = ComponentStatusName.SUCCESS,
  WARNING = ComponentStatusName.WARNING,
  INFO = ComponentStatusName.INFO,
}

export interface StatusToastProps {
  status: StatusToastName;
  content: string;
}

export interface ShowToastProps extends StatusToastProps {
  isShow: boolean;
}
