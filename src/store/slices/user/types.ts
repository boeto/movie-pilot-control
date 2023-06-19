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
export interface ResLogin200 {
  access_token: 'string';
  token_type: 'string';
}
export interface ResLogin422 {
  detail: [
    {
      loc: ['string', 0];
      msg: 'string';
      type: 'string';
    },
  ];
}

export type ResLogin = ResLogin200 | ResLogin422;
