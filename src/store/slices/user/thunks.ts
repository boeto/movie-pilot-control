import { createAppAsyncThunk } from '../../thunk';
import { fetchLogin } from './fetch';
import { LoginInfo } from './types';

export const userLoginAsync = createAppAsyncThunk(
  'user/fetchfetchLogin',
  async (loginInfo: LoginInfo) => {
    console.log('🚀 ~ file: thunks.ts:8 ~ loginInfo:', loginInfo);

    const result = await fetchLogin(loginInfo);

    if (!result['access_token']) {
      throw new Error('Failed to fetch data');
    }

    return result;
  },
);
