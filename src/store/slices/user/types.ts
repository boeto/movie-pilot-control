import { SerializedError } from '@reduxjs/toolkit';

export interface UserSliceState {
  isLogin: boolean;
  isLoading: boolean;
  error: SerializedError | null;

  access_token: string;
  username: string;
}

export interface LoginInfo {
  username: string;
  password: string;
}
