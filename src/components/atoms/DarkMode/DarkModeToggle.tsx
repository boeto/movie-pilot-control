import type { FC } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';

import { theme } from '@/components/flowbite-react';
import { ModeName, setWithSaveMode } from '@/utils';

import { DarkModeToggleProps } from './types';

export const DarkModeToggle: FC<DarkModeToggleProps> = ({
  className,
  ...props
}) => (
  <>
    <button
      aria-label="Toggle light mode"
      data-testid="light-mode-toggle"
      type="button"
      className={`${twMerge(
        theme.darkThemeToggle.root.base,
        className,
      )} hidden dark:block`}
      {...props}
      onClick={() => {
        setWithSaveMode(ModeName.LIGHT);
      }}
    >
      <HiSun aria-label="Currently dark mode" className="h-6 w-6" />
    </button>
    <button
      aria-label="Toggle dark mode"
      data-testid="dark-mode-toggle"
      type="button"
      onClick={() => {
        setWithSaveMode(ModeName.DARK);
      }}
      className={`${twMerge(
        theme.darkThemeToggle.root.base,
        className,
      )} block dark:hidden`}
      {...props}
    >
      <HiMoon aria-label="Currently light mode" className="h-5 w-5" />
    </button>
  </>
);
