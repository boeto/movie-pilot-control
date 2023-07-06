import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { UiSliceState } from './types';

import type { ReduxState } from '../../reducer';

const initialState: UiSliceState = {
  isSidebarOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setIsSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
    },
  },
});

// reducer
const uiReducer = uiSlice.reducer;

// state
const selectUi = (state: ReduxState) => state.ui;

const { setIsSidebarOpen } = uiSlice.actions;

export { selectUi, setIsSidebarOpen, uiReducer };
