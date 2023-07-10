import { createSlice } from '@reduxjs/toolkit';

import { Duration, StatusWithoutDisabledName } from '@/components/types';

import {
  addToastContent,
  nameSpace,
  removeToastContent,
  setToastIsClosed,
  setToastIsRemoved,
  setToastIsSlideIn,
} from './actions';
import type { MessageSliceState } from './types';

import type { ReduxState } from '../../reducer';

const initialState: MessageSliceState = {
  toast: {},
  toastId: 0,
};

const messageSlice = createSlice({
  name: nameSpace,
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(addToastContent, (state, action) => {
        state.toastId += 1;
        const { toastId } = state;
        const { idKey, statusColor, duration, ...rest } = action.payload;
        state.toast[idKey] = {
          ...rest,
          statusColor: statusColor ?? StatusWithoutDisabledName.INFO,
          duration: duration ?? Duration.D700,

          toastId,
        };
      })
      .addCase(removeToastContent, (state, action) => {
        delete state.toast[action.payload];
      })
      .addCase(setToastIsSlideIn, (state, action) => {
        const { idKey, isSlideIn } = action.payload;

        state.toast[idKey].isSlideIn = isSlideIn;
      })
      .addCase(setToastIsClosed, (state, action) => {
        const { idKey, isClosed } = action.payload;
        state.toast[idKey].isClosed = isClosed;
      })
      .addCase(setToastIsRemoved, (state, action) => {
        const { idKey, isRemoved } = action.payload;
        state.toast[idKey].isRemoved = isRemoved;
      });
  },
});

// reducer
const messageReducer = messageSlice.reducer;

// state
const selectMessage = (state: ReduxState) => state.message;

export { messageReducer, selectMessage };
