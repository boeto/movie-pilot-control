import { createAsyncThunk } from '@reduxjs/toolkit';

import { AuthLoginInfo } from '@/common';
import { postLogin } from '@/service';

export const setAuthLoginAsync = createAsyncThunk<
  string,
  AuthLoginInfo,
  { rejectValue: string | undefined }
>('auth/login', async (authLoginInfo: AuthLoginInfo, { rejectWithValue }) => {
  try {
    const accessToken: string = await postLogin(authLoginInfo);
    return accessToken;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
