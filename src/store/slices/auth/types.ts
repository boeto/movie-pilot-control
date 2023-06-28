import { SerializedError } from '@reduxjs/toolkit';

export interface AuthSliceState {
  accessToken: string;
  isLogin: boolean;
  isLoading: boolean;
  actionError: string | undefined;
}

export interface AuthLoginInfo {
  username: string;
  password: string;
}
