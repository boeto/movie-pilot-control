const isClient = (): boolean => typeof window !== 'undefined';

const isSmallScreen = (): boolean => isClient() && window.innerWidth < 768;

export { isClient, isSmallScreen };
