import { createAction } from '@reduxjs/toolkit';

import { nameSpace, ToastContentAdd } from './types';

const addToastContent = createAction<ToastContentAdd>(
  `${nameSpace}/addToastContent`,
);
const removeToastContent = createAction<string>(
  `${nameSpace}/removeToastContent`,
);
const setToastIsSlideIn = createAction<{ idKey: string; isSlideIn: boolean }>(
  `${nameSpace}/setToastIsSlideIn`,
);
const setToastIsClosed = createAction<{ idKey: string; isClosed: boolean }>(
  `${nameSpace}/setToastIsClosed`,
);
const setToastIsRemoved = createAction<{ idKey: string; isRemoved: boolean }>(
  `${nameSpace}/setToastIsRemoved`,
);

export {
  addToastContent,
  nameSpace,
  removeToastContent,
  setToastIsClosed,
  setToastIsRemoved,
  setToastIsSlideIn,
};
