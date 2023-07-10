import { createAppAsyncThunk } from '@/store/thunk';
import { createToastIdKey } from '@/utils';

import {
  addToastContent,
  removeToastContent,
  setToastIsClosed,
  setToastIsRemoved,
  setToastIsSlideIn,
} from './actions';
import { AddToast, nameSpace, RemoveToast } from './types';

const addToast = createAppAsyncThunk(
  `${nameSpace}/addToast`,
  async ({ delay, ...props }: AddToast, { dispatch }) => {
    const idKey = createToastIdKey();
    dispatch(addToastContent({ ...props, idKey }));

    setTimeout(() => {
      dispatch(setToastIsSlideIn({ idKey, isSlideIn: true }));
    }, delay ?? 0);
  },
);

const removeToast = createAppAsyncThunk(
  `${nameSpace}/removeToast`,
  async ({ idKey, duration }: RemoveToast, { dispatch }) => {
    dispatch(setToastIsClosed({ idKey, isClosed: true }));

    setTimeout(() => {
      dispatch(setToastIsRemoved({ idKey, isRemoved: true }));

      setTimeout(() => {
        dispatch(removeToastContent(idKey));
      }, duration);
    }, duration);
  },
);

export { addToast, removeToast };
