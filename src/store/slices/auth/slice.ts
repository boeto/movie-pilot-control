import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthSliceState } from './types';
import { authLoginAsync } from './thunks';

const initialState: AuthSliceState = {
  accessToken: '',
  isLogin: false,
  isLoading: false,
  actionError: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(authLoginAsync.pending, (state) => {
        state.accessToken = '';
        state.isLogin = false;
        state.isLoading = true;
        state.actionError = undefined;
      })
      .addCase(authLoginAsync.rejected, (state, action) => {
        state.accessToken = '';
        state.isLogin = false;
        state.isLoading = false;
        state.actionError = action.payload;
        // state.actionError = action.error.message;
      })
      .addCase(authLoginAsync.fulfilled, (state, action) => {
        state.accessToken = action.payload;
        state.isLogin = true;
        state.isLoading = false;
        state.actionError = undefined;
      });
  },
});

export const { setIsLoading } = authSlice.actions;
