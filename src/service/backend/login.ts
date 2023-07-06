import { AuthLoginInfo } from '@/common';

import { fetchBackend } from './shared';

import { FetchMethod, HeadersContentType, HeadersKeys } from '../types';

export const postLogin = async (authLoginInfo: AuthLoginInfo) => {
  const formData = new URLSearchParams();
  formData.append('username', authLoginInfo.username);
  formData.append('password', authLoginInfo.password);

  const endpoint = '/api/v1/login/access-token';
  const options = {
    method: FetchMethod.POST,
    headers: { [HeadersKeys.CONTENT_TYPE]: HeadersContentType.URLENCODED },
    body: formData.toString(),
  };

  try {
    const res = await fetchBackend(endpoint, options);

    const result = await res.json();

    if (!res.ok) {
      throw new Error(JSON.stringify(res.status));
    }

    const accessToken = result.access_token;
    if (!accessToken) {
      throw new Error('errorAccessTokenNotFound');
    }
    return accessToken as string;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
