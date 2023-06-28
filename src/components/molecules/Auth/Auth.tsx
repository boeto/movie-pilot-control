'use client';

import { selectAuth, useSelector } from '@/store';

function ShowAuthInfo() {
  const {
    isLoading,
    isLogin,
    accessToken: accessToken,
  } = useSelector(selectAuth);
  return (
    <p className="text-gray-500 text-center text-sm">
      isLoading: 【{String(isLoading)}】- isLogin: 【{String(isLogin)}】-
      accessToken: 【{accessToken.slice(0, 6)}】
    </p>
  );
}
export { ShowAuthInfo };
