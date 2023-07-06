/* eslint-disable no-underscore-dangle */
declare global {
  interface Window {
    __setPreferredMode: (mode: string) => void;
    __mode: string;
  }
}

enum ModeName {
  LIGHT = 'light',
  DARK = 'dark',
}

const getInitialMode = () => {
  let preferredMode;

  try {
    preferredMode = localStorage.getItem('mode');
    // eslint-disable-next-line no-empty
  } catch (err) {}

  let initialMode = preferredMode;
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

  if (!initialMode) {
    initialMode = darkQuery.matches ? 'dark' : 'light';
  }

  return initialMode;
};

const setMode = (mode: ModeName) => {
  window.__mode = mode;
  if (mode === ModeName.DARK) {
    document.documentElement.classList.add('dark');
  } else if (mode === ModeName.LIGHT) {
    document.documentElement.classList.remove('dark');
  }
};

const setWithSaveMode = (mode: ModeName) => window.__setPreferredMode(mode);

const setInitialDarkMode = () => {
  const initialMode = getInitialMode();
  if (initialMode && initialMode === ModeName.DARK) setMode(ModeName.DARK);
};

export {
  getInitialMode,
  ModeName,
  setInitialDarkMode,
  setMode,
  setWithSaveMode,
};
