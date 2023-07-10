import { Duration, StatusWithoutDisabledName } from '@/components/types';

interface ToastContentBase {
  message: string;

  isSlideIn?: boolean;
  isClosed?: boolean;
  isRemoved?: boolean;
  isTopWithoutNav?: boolean;

  className?: string;
}

interface ToastContentAdd extends ToastContentBase {
  idKey: string;
  duration?: Duration;
  statusColor?: StatusWithoutDisabledName;
}

interface AddToast extends Omit<ToastContentAdd, 'idKey'> {
  delay?: number;
}
interface RemoveToast {
  idKey: string;
  duration: Duration;
}

interface ToastContent extends ToastContentBase {
  toastId: number;

  duration: Duration;
  statusColor: StatusWithoutDisabledName;
}

interface Toast {
  [idKey: string]: ToastContent;
}

interface MessageSliceState {
  toast: Toast;
  toastId: number;
}
const nameSpace = 'message';

export { nameSpace };

export type {
  AddToast,
  MessageSliceState,
  RemoveToast,
  Toast,
  ToastContent,
  ToastContentAdd,
};
