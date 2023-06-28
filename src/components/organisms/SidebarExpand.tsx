'use client';

import type { FC } from 'react';
import { useEffect, useState } from 'react';
import {
  HiAdjustments,
  HiChartPie,
  HiClipboard,
  HiCog,
  HiCollection,
  HiInboxIn,
  HiInformationCircle,
  HiLockClosed,
  HiSearch,
  HiShoppingBag,
  HiUsers,
  HiViewGrid,
} from 'react-icons/hi';

import { LanguageDropdown, Sidebar, TextInput, Tooltip } from '@/components';

import { useSidebarContext, isSmallScreen } from '@/utils';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const SidebarExpand: FC = function () {
  const { isOpenOnSmallScreens: isSidebarOpenOnSmallScreens } =
    useSidebarContext();

  const [currentPage, setCurrentPage] = useState('');
  const [isPluginsOpen, setPluginsOpen] = useState(false);
  const [isUsersOpen, setUsersOpen] = useState(false);
  const [isAuthenticationOpen, setAuthenticationOpen] = useState(false);

  useEffect(() => {
    const newPage = window.location.pathname;

    setCurrentPage(newPage);
    setPluginsOpen(newPage.includes('/plugins/'));
    setUsersOpen(newPage.includes('/users/'));
    setAuthenticationOpen(newPage.includes('/auth/'));
  }, [setCurrentPage, setPluginsOpen, setUsersOpen]);

  return (
    <div
      className={twMerge(
        'lg:!block',
        !isSidebarOpenOnSmallScreens ? 'hidden' : '',
      )}
    >
      <Sidebar
        aria-label="Sidebar with multi-level dropdown"
        collapsed={isSidebarOpenOnSmallScreens && !isSmallScreen()}
      >
        <div className="flex h-full flex-col justify-between py-2">
          <div>
            <form className="pb-3 md:hidden">
              <TextInput
                icon={HiSearch}
                type="search"
                placeholder="Search"
                required
                size={32}
              />
            </form>
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item
                  as={Link}
                  href="/"
                  icon={HiChartPie}
                  className={
                    '/' === currentPage ? 'bg-gray-100 dark:bg-gray-700' : ''
                  }
                >
                  仪表盘
                </Sidebar.Item>

                <Sidebar.Item
                  as={Link}
                  href="/search"
                  icon={HiViewGrid}
                  className={
                    '/search' === currentPage
                      ? 'bg-gray-100 dark:bg-gray-700'
                      : ''
                  }
                >
                  资源搜索
                </Sidebar.Item>

                <Sidebar.Item
                  as={Link}
                  href="/toolbox"
                  icon={HiInboxIn}
                  label="3"
                  className={
                    '/toolbox' === currentPage
                      ? 'bg-gray-100 dark:bg-gray-700'
                      : ''
                  }
                >
                  工具箱
                </Sidebar.Item>

                <Sidebar.Collapse
                  icon={HiShoppingBag}
                  label="插件"
                  open={isPluginsOpen}
                >
                  <Sidebar.Item
                    as={Link}
                    href="/plugins/installed"
                    className={
                      '/plugins/installed' === currentPage
                        ? 'bg-gray-100 dark:bg-gray-700'
                        : ''
                    }
                  >
                    已安装
                  </Sidebar.Item>
                  <Sidebar.Item
                    as={Link}
                    href="/plugins/not-installed"
                    className={
                      '/plugins/not-installed' === currentPage
                        ? 'bg-gray-100 dark:bg-gray-700'
                        : ''
                    }
                  >
                    未安装
                  </Sidebar.Item>
                  <Sidebar.Item
                    as={Link}
                    href="/plugins/all"
                    className={
                      '/plugins/all' === currentPage
                        ? 'bg-gray-100 dark:bg-gray-700'
                        : ''
                    }
                  >
                    全部
                  </Sidebar.Item>
                </Sidebar.Collapse>

                <Sidebar.Collapse
                  icon={HiUsers}
                  label="Users"
                  open={isUsersOpen}
                >
                  <Sidebar.Item
                    as={Link}
                    href="/users/list"
                    className={
                      '/users/list' === currentPage
                        ? 'bg-gray-100 dark:bg-gray-700'
                        : ''
                    }
                  >
                    Users list
                  </Sidebar.Item>
                  <Sidebar.Item
                    as={Link}
                    href="/users/profile"
                    className={
                      '/users/profile' === currentPage
                        ? 'bg-gray-100 dark:bg-gray-700'
                        : ''
                    }
                  >
                    Profile
                  </Sidebar.Item>
                  <Sidebar.Item
                    as={Link}
                    href="/users/feed"
                    className={
                      '/users/feed' === currentPage
                        ? 'bg-gray-100 dark:bg-gray-700'
                        : ''
                    }
                  >
                    Feed
                  </Sidebar.Item>
                  <Sidebar.Item
                    as={Link}
                    href="/users/settings"
                    className={
                      '/users/settings' === currentPage
                        ? 'bg-gray-100 dark:bg-gray-700'
                        : ''
                    }
                  >
                    Settings
                  </Sidebar.Item>
                </Sidebar.Collapse>

                <Sidebar.Collapse
                  icon={HiLockClosed}
                  label="Authentication"
                  open={isAuthenticationOpen}
                >
                  <Sidebar.Item as={Link} href="/auth/login">
                    Login
                  </Sidebar.Item>
                  <Sidebar.Item as={Link} href="/auth/sign-up">
                    Sign up
                  </Sidebar.Item>
                  <Sidebar.Item as={Link} href="/auth/forgot-password">
                    Forgot password
                  </Sidebar.Item>
                  <Sidebar.Item as={Link} href="/auth/reset-password">
                    Reset password
                  </Sidebar.Item>
                  <Sidebar.Item as={Link} href="/auth/profile-lock">
                    Profile lock
                  </Sidebar.Item>
                </Sidebar.Collapse>
              </Sidebar.ItemGroup>
              <Sidebar.ItemGroup>
                <Sidebar.Item
                  href="https://github.com/themesberg/flowbite-react/"
                  icon={HiClipboard}
                >
                  Docs
                </Sidebar.Item>
                <Sidebar.Item
                  href="https://flowbite-react.com/"
                  icon={HiCollection}
                >
                  Components
                </Sidebar.Item>
                <Sidebar.Item
                  href="https://github.com/themesberg/flowbite-react/issues"
                  icon={HiInformationCircle}
                >
                  Help
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </div>
          <BottomMenu />
        </div>
      </Sidebar>
    </div>
  );
};

const BottomMenu: FC = function () {
  return (
    <div className="flex items-center justify-center gap-x-5">
      <button className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
        <span className="sr-only">Tweaks</span>
        <HiAdjustments className="text-2xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white " />
      </button>
      <div>
        <Tooltip content="Settings page">
          <a
            href="/users/settings"
            className="inline-flex cursor-pointer justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Settings page</span>
            <HiCog className="text-2xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" />
          </a>
        </Tooltip>
      </div>
      <div>
        <LanguageDropdown />
      </div>
    </div>
  );
};

export { SidebarExpand };
