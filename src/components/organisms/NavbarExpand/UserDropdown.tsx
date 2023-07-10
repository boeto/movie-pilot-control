import type { FC } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { getLocalePath } from '@/common';
import { Avatar, Dropdown } from '@/components/atoms';
import { StatusWithoutDisabledName } from '@/components/types';
import {
  addToast,
  resetAll,
  selectAuth,
  useDispatch,
  useSelector,
} from '@/store';

export const UserDropdown: FC = () => {
  const t = useTranslations('Auth');
  const locale = useLocale();

  const router = useRouter();
  const dispatch = useDispatch();

  const { isLogin, accessToken } = useSelector(selectAuth);
  const title = isLogin && accessToken ? t('loggedin') : t('notloggedin');
  const detail =
    isLogin && accessToken ? `${accessToken.slice(0, 6)}...` : t('loginFirst');

  const logout = () => {
    dispatch(resetAll());
    router.push(getLocalePath(locale, 'authLogin', 'auth'));
    dispatch(
      addToast({
        statusColor: StatusWithoutDisabledName.SUCCESS,
        message: t('logoutSuccess'),
        delay: 1200,
      }),
    );
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
        {t('logout')}
      </Dropdown.Item>
    </Dropdown>
  );
};
