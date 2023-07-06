import { HiChartPie, HiShoppingBag } from 'react-icons/hi';

import { PathsCollapseItem } from './types';

export const createPaths = () => {
  const paths: PathsCollapseItem = [
    {
      itemLabel: 'dashboard',
      icon: HiChartPie,
      path: '/dashboard',
    },
    {
      itemLabel: 'search',
      icon: HiChartPie,
      path: '/search',
    },

    {
      collapseLabel: 'discover',
      icon: HiShoppingBag,
      item: [
        {
          itemLabel: 'discoverRanking',
          icon: HiChartPie,
          path: '/discover/ranking',
        },
        {
          itemLabel: 'discoverDoubanMovie',
          icon: HiChartPie,
          path: '/discover/douban-movie',
        },
        {
          itemLabel: 'discoverDoubanTv',
          icon: HiChartPie,
          path: '/discover/douban-tv',
        },
        {
          itemLabel: 'discoverTMDBMovie',
          icon: HiChartPie,
          path: '/discover/tmdb-movie',
        },
        {
          itemLabel: 'discoverTMDBTv',
          icon: HiChartPie,
          path: '/discover/tmdb-tv',
        },
        {
          itemLabel: 'discoverBangumi',
          icon: HiChartPie,
          path: '/discover/bangumi',
        },
      ],
    },

    {
      collapseLabel: 'subscribe',
      icon: HiShoppingBag,
      item: [
        {
          itemLabel: 'subscribeMovie',
          icon: HiChartPie,
          path: '/subscribe/movie',
        },
        {
          itemLabel: 'subscribeTv',
          icon: HiChartPie,
          path: '/subscribe/tv',
        },
        {
          itemLabel: 'subscribeCustom',
          icon: HiChartPie,
          path: '/subscribe/custom',
        },
      ],
    },

    {
      collapseLabel: 'download',
      icon: HiShoppingBag,
      item: [
        {
          itemLabel: 'downloadDownloading',
          icon: HiChartPie,
          path: '/download/downloading',
        },
        {
          itemLabel: 'downloadDownloaded',
          icon: HiChartPie,
          path: '/download/downloaded',
        },
        {
          itemLabel: 'downloadHistory',
          icon: HiChartPie,
          path: '/download/history',
        },
      ],
    },

    {
      collapseLabel: 'site',
      icon: HiShoppingBag,
      item: [
        {
          itemLabel: 'siteManagement',
          icon: HiChartPie,
          path: '/site/management',
        },
        {
          itemLabel: 'siteStatistics',
          icon: HiChartPie,
          path: '/site/statistics',
        },
        {
          itemLabel: 'siteBrushtask',
          icon: HiChartPie,
          path: '/site/brushtask',
        },
        {
          itemLabel: 'siteResources',
          icon: HiChartPie,
          path: '/site/resources',
        },
      ],
    },

    {
      collapseLabel: 'plugins',
      icon: HiShoppingBag,
      item: [
        {
          itemLabel: 'pluginsInstalled',
          icon: HiChartPie,
          path: '/plugins/installed',
        },
        {
          itemLabel: 'pluginsNotInstall',
          icon: HiChartPie,
          path: '/plugins/not-install',
        },
      ],
    },

    {
      collapseLabel: 'auth',
      icon: HiShoppingBag,
      item: [
        {
          itemLabel: 'authLogin',
          icon: HiChartPie,
          path: '/auth/login',
        },
        {
          itemLabel: 'authUsers',
          icon: HiChartPie,
          path: '/auth/users',
        },
      ],
    },

    {
      collapseLabel: 'settings',
      icon: HiShoppingBag,
      item: [
        {
          itemLabel: 'settingsBasic',
          icon: HiChartPie,
          path: '/settings/basic',
        },
        {
          itemLabel: 'settingsLibrary',
          icon: HiChartPie,
          path: '/settings/library',
        },
      ],
    },
  ];
  return paths;
};
