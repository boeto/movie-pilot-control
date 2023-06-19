'use client';

import { selectUser, useSelector } from '@/store';

function ShowUserInfo() {
  const { isLoading, isLogin, access_token } = useSelector(selectUser);
  return (
    <p className="text-gray-500 text-center text-sm">
      isLoading: 【{String(isLoading)}】- isLogin: 【{String(isLogin)}】-
      access_token: 【{access_token.slice(0, 6)}】
    </p>
  );
}
export { ShowUserInfo };
