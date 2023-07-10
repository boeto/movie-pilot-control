import { twSort } from '@/utils';

const getToastCustomTheme = () => {
  const toastCustomTheme = {
    root: {
      base: twSort(
        'absolute flex flex-col right-2 z-20 top-[80px] transition ease-in-out duration-500 items-end',
      ),

      topWithoutNav: '-translate-y-[72px]',
    },
    item: {
      root: {
        base: twSort(
          'mb-2 flex max-w-xs translate-x-full transform items-center overflow-hidden rounded-lg border-b border-gray-200 bg-white p-4 text-gray-500 opacity-0 shadow-lg dark:border dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 ',
        ),

        closed: twSort('opacity-0 translate-x-full'),

        slideIn: twSort('translate-x-0 opacity-100'),
      },

      toggle: {
        base: twSort(
          '-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white',
        ),
        icon: twSort('h-5 w-5 shrink-0'),
      },

      status: {
        root: {
          base: twSort(
            'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg',
          ),
          color: {
            info: twSort(
              'bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200',
            ),
          },
        },
        icon: twSort('h-5 w-5'),
      },
      content: twSort('ml-3 mr-4 text-sm font-normal'),
    },
    removed: twSort('my-0 py-0 h-0 border-0 dark:border-0'),
    transition: twSort('transition-all ease-out'),
  };

  return toastCustomTheme;
};

export { getToastCustomTheme };
