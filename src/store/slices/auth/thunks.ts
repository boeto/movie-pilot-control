import { postLogin } from '@/service';
import { createAppAsyncThunk } from '../../thunk';
import { AuthLoginInfo } from './types';

export const authLoginAsync = createAppAsyncThunk(
  'auth/login',
  async (authLoginInfo: AuthLoginInfo, { rejectWithValue }) => {
    try {
      const accessToken = await postLogin(authLoginInfo);
      return accessToken;
    } catch (error: any) {
      return rejectWithValue(error.message);
      // throw new Error(error.message);
    }
  },
);
