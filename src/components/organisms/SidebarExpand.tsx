'use client';
/* eslint-disable jsx-a11y/anchor-is-valid */
import type { FC } from 'react';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import {
  HiAdjustments,
  HiChartPie,
  HiChartSquareBar,
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

import { Sidebar, TextInput, Tooltip } from '@/components/flowbite-react';
import { LanguageDropdown } from '@/components';

import { useSidebarContext, isSmallScreen } from '@/utils';

const SidebarExpand: FC = function () {
  const { isOpenOnSmallScreens: isSidebarOpenOnSmallScreens } =
    useSidebarContext();

  const [currentPage, setCurrentPage] = useState('');
  const [isEcommerceOpen, setEcommerceOpen] = useState(true);
  const [isUsersOpen, setUsersOpen] = useState(true);

  useEffect(() => {
    const newPage = window.location.pathname;

    setCurrentPage(newPage);
    setEcommerceOpen(newPage.includes('/e-commerce/'));
    setUsersOpen(newPage.includes('/users/'));
  }, [setCurrentPage, setEcommerceOpen, setUsersOpen]);

  return (
    <div
      className={classNames('lg:!block', {
        hidden: !isSidebarOpenOnSmallScreens,
      })}
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
                  href="/"
                  icon={HiChartPie}
                  className={
                    '/' === currentPage ? 'bg-gray-100 dark:bg-gray-700' : ''
                  }
                >
                  仪表盘
                </Sidebar.Item>
                <Sidebar.Item
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
                  href="/mailing/inbox"
                  icon={HiInboxIn}
                  label="3"
                  className={
                    '/mailing/inbox' === currentPage
                      ? 'bg-gray-100 dark:bg-gray-700'
                      : ''
                  }
                >
                  Inbox
                </Sidebar.Item>
                <Sidebar.Collapse
                  icon={HiShoppingBag}
                  label="E-commerce"
                  open={isEcommerceOpen}
                >
                  <Sidebar.Item
                    href="/e-commerce/products"
                    className={
                      '/e-commerce/products' === currentPage
                        ? 'bg-gray-100 dark:bg-gray-700'
                        : ''
                    }
                  >
                    Products
                  </Sidebar.Item>
                  <Sidebar.Item
                    href="/e-commerce/billing"
                    className={
                      '/e-commerce/billing' === currentPage
                        ? 'bg-gray-100 dark:bg-gray-700'
                        : ''
                    }
                  >
                    Billing
                  </Sidebar.Item>
                  <Sidebar.Item
                    href="/e-commerce/invoice"
                    className={
                      '/e-commerce/invoice' === currentPage
                        ? 'bg-gray-100 dark:bg-gray-700'
                        : ''
                    }
                  >
                    Invoice
                  </Sidebar.Item>
                </Sidebar.Collapse>
                <Sidebar.Collapse
                  icon={HiUsers}
                  label="Users"
                  open={isUsersOpen}
                >
                  <Sidebar.Item
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
                <Sidebar.Collapse icon={HiChartSquareBar} label="Pages">
                  <Sidebar.Item href="/pages/pricing">Pricing</Sidebar.Item>
                  <Sidebar.Item href="/pages/maintenance">
                    Maintenace
                  </Sidebar.Item>
                  <Sidebar.Item href="/pages/404">404 not found</Sidebar.Item>
                  <Sidebar.Item href="/pages/500">
                    500 server error
                  </Sidebar.Item>
                </Sidebar.Collapse>
                <Sidebar.Collapse icon={HiLockClosed} label="Authentication">
                  <Sidebar.Item href="/authentication/sign-in">
                    Sign in
                  </Sidebar.Item>
                  <Sidebar.Item href="/authentication/sign-up">
                    Sign up
                  </Sidebar.Item>
                  <Sidebar.Item href="/authentication/forgot-password">
                    Forgot password
                  </Sidebar.Item>
                  <Sidebar.Item href="/authentication/reset-password">
                    Reset password
                  </Sidebar.Item>
                  <Sidebar.Item href="/authentication/profile-lock">
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
