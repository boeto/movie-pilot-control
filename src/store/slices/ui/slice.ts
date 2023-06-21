import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { UiSliceState } from './types';
import { ModeName } from '@/components/atoms/DarkMode/types';
const initialState: UiSliceState = {
  mode: ModeName.LIGHT,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setModeState: (state, action: PayloadAction<ModeName>) => {
      console.log('🚀 ~ file: slice.ts:18 ~ action.payload:', action.payload);
      state.mode = action.payload;
    },
  },
});

export const { setModeState } = uiSlice.actions;
