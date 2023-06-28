import { AuthLoginInfo } from '@/store';
import { FetchMethod, HeadersContentType, HeadersKeys } from '../types';
import { getBackendUrl } from '@/utils';
import { fetchBackend } from './backend';

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
      switch (res.status) {
        case 401:
          throw new Error('登录失败: 用户名/密码不正确');
        case 403:
          throw new Error('登录失败: 用户未启用');
        case 500:
          throw new Error('登录失败: 服务器错误');

        default:
          throw new Error(`登录失败: ${res.status}`);
      }
    }

    const { access_token } = result;
    if (!access_token) {
      throw new Error('accessToken not found');
    }
    return access_token;
  } catch (error: any) {
    throw new Error(error['message']);
  }
};
