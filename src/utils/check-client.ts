function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

function isSmallScreen(): boolean {
  return isBrowser() && window.innerWidth < 768;
}

export { isBrowser, isSmallScreen };
