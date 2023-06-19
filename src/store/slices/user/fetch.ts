import { LoginInfo } from './types';

// const baseUrl = process.env.BASE_URL;
const baseUrl = 'http://localhost:3001';
export const fetchLogin = async (loginInfo: LoginInfo) => {
  const formData = new URLSearchParams();
  formData.append('username', loginInfo.username);
  formData.append('password', loginInfo.password);

  const url = `${baseUrl}/api/v1/login/access-token`;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const result = await res.json();

    return result;
  } catch (error) {
    console.log('🚀 ~ file: fetch.ts ~ fetchLogin ~ error:', error);
  }
};
