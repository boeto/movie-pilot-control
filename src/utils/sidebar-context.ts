import { SidebarContext } from '@/components';
import { useContext } from 'react';

export interface SidebarContextProps {
  isOpenOnSmallScreens: boolean;
  isPageWithSidebar: boolean;
  // eslint-disable-next-line no-unused-vars
  setOpenOnSmallScreens: (isOpen: boolean) => void;
}

export function useSidebarContext(): SidebarContextProps {
  const context = useContext(SidebarContext);

  if (typeof context === 'undefined') {
    throw new Error(
      'useSidebarContext should be used within the SidebarContext provider!',
    );
  }

  return context;
}
