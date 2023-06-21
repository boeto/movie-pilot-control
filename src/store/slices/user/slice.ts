import { createSlice } from '@reduxjs/toolkit';
import { userLoginAsync } from './thunks';
import { UserSliceState } from './types';

const initialState: UserSliceState = {
  isLogin: false,
  isLoading: false,
  error: null,

  access_token: '',
  username: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(userLoginAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userLoginAsync.rejected, (state, action) => {
        state.error = action.error;
      })
      .addCase(userLoginAsync.fulfilled, (state, action) => {
        console.log('🚀 ~ file: slice.ts:28 ~ .addCase ~ action:', action);
        state.access_token = action.payload.access_token;
        state.isLogin = true;
        state.isLoading = false;
      });
  },
});
