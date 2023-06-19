import { Toast } from '@/components/flowbite-react';
import { ShowToastProps, StatusToastName, StatusToastProps } from './types';
import { HiCheck, HiExclamation, HiFire, HiX } from 'react-icons/hi';

const StatusToast = ({ status, content }: StatusToastProps) => (
  <div>
    {status === StatusToastName.SUCCESS && (
      <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
          <HiFire className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">{content}</div>
        <Toast.Toggle />
      </Toast>
    )}

    {status === StatusToastName.SUCCESS && (
      <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
          <HiCheck className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">{content}</div>
        <Toast.Toggle />
      </Toast>
    )}
    {status === StatusToastName.ERROR && (
      <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
          <HiX className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">Item has been deleted.</div>
        <Toast.Toggle />
      </Toast>
    )}
    {status === StatusToastName.WARNING && (
      <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
          <HiExclamation className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">
          Improve password difficulty.
        </div>
        <Toast.Toggle />
      </Toast>
    )}
  </div>
);

const ShowToast = ({ isShow, status, content }: ShowToastProps) =>
  isShow && <StatusToast status={status} content={content} />;

export { StatusToast, ShowToast };
