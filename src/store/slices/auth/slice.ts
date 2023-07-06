import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { setAuthLoginAsync } from './thunk';
import { AuthSliceState } from './types';

import type { ReduxState } from '../../reducer';

const initialState: AuthSliceState = {
  accessToken: '',
  isLogin: false,
  isLoading: false,
  actionError: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetActionError: (state) => {
      state.actionError = undefined;
    },
    setActionError: (state, action: PayloadAction<string | undefined>) => {
      state.actionError = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setIsLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(setAuthLoginAsync.pending, (state) => {
        state.accessToken = '';
        state.isLogin = false;
        state.isLoading = true;
        state.actionError = undefined;
      })
      .addCase(setAuthLoginAsync.rejected, (state, action) => {
        state.accessToken = '';
        state.isLogin = false;
        state.isLoading = false;
        state.actionError = action.payload;
        // state.actionError = action.error.message;
      })
      .addCase(setAuthLoginAsync.fulfilled, (state, action) => {
        state.accessToken = action.payload;
        state.isLogin = true;
        state.isLoading = false;
        state.actionError = undefined;
      });
  },
});

// reducer
const authReducer = authSlice.reducer;

// state
const selectAuth = (state: ReduxState) => state.auth;

// action
const {
  resetActionError,
  setActionError,
  setIsLoading,
  setIsLogin,
  setAccessToken,
} = authSlice.actions;

export {
  authReducer,
  resetActionError,
  selectAuth,
  setAccessToken,
  setActionError,
  setAuthLoginAsync,
  setIsLoading,
  setIsLogin,
};
