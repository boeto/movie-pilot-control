import type { FC } from 'react';
import { useRouter } from 'next/navigation';

import { Avatar, Dropdown } from '@/components/atoms';
import { resetAll, selectAuth, useDispatch, useSelector } from '@/store';

export const UserDropdown: FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { isLogin, accessToken } = useSelector(selectAuth);
  const title = isLogin && accessToken ? '已登陆' : '未登陆';
  const detail =
    isLogin && accessToken ? `${accessToken.slice(0, 10)}...` : '请先登陆...';

  const logout = () => {
    dispatch(resetAll());
    router.push('/auth/login');
  };

  return (
    <Dropdown
      arrowIcon={false}
      inline
      label={
        <span>
          <span className="sr-only">User menu</span>
          <Avatar alt="" img="/images/users/neil-sims.png" rounded size="sm" />
        </span>
      }
    >
      <Dropdown.Header>
        <span className="block text-sm">{title}</span>
        <span className="block truncate text-sm font-medium">{detail}</span>
      </Dropdown.Header>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item className="hover:rounded-b-xl" onClick={logout}>
        Logout
      </Dropdown.Item>
    </Dropdown>
  );
};
