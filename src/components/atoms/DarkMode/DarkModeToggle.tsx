import { theme } from '@/components/flowbite-react';
import { type ComponentProps, type FC } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { ModeName } from './types';
import { twMerge } from 'tailwind-merge';

declare global {
  interface Window {
    __setPreferredMode: (mode: string) => void;
  }
}

interface DarkModeToggleProps extends ComponentProps<'button'> {}

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
        window.__setPreferredMode(ModeName.LIGHT);
      }}
    >
      <HiSun aria-label="Currently dark mode" className="h-6 w-6" />
    </button>
    <button
      aria-label="Toggle dark mode"
      data-testid="dark-mode-toggle"
      type="button"
      onClick={() => {
        window.__setPreferredMode(ModeName.DARK);
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
