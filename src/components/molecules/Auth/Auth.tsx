'use client';

import { FC } from 'react';

import { selectAuth, useSelector } from '@/store';

const ShowAuthInfo: FC = () => {
  const { isLoading, isLogin, accessToken } = useSelector(selectAuth);
  return (
    <p className="text-center text-sm text-gray-500">
      isLoading: 【{String(isLoading)}】- isLogin: 【{String(isLogin)}】-
      accessToken: 【{accessToken.slice(0, 6)}】
    </p>
  );
};
export { ShowAuthInfo };
