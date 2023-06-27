'use client';

import type { PropsWithChildren } from 'react';
import type { SidebarContextProps } from '@/utils';
import { isClient, isSmallScreen } from '@/utils';
import { createContext, useEffect, useState } from 'react';

const SidebarContext = createContext<SidebarContextProps>(undefined!);

function SidebarProvider({ children }: PropsWithChildren) {
  const location = isClient() ? window.location.pathname : '/';
  const [isOpen, setOpen] = useState(
    isClient()
      ? window.localStorage.getItem('isSidebarOpen') === 'true'
      : false,
  );

  // Save latest state to localStorage
  useEffect(() => {
    window.localStorage.setItem('isSidebarOpen', isOpen.toString());
  }, [isOpen]);

  // Close Sidebar on page change on mobile
  useEffect(() => {
    if (isSmallScreen()) {
      setOpen(false);
    }
  }, [location]);

  // Close Sidebar on mobile tap inside main content
  useEffect(() => {
    function handleMobileTapInsideMain(event: MouseEvent) {
      const main = document.querySelector('main');
      const isClickInsideMain = main?.contains(event.target as Node);

      if (isSmallScreen() && isClickInsideMain) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleMobileTapInsideMain);
    return () => {
      document.removeEventListener('mousedown', handleMobileTapInsideMain);
    };
  }, []);

  return (
    <SidebarContext.Provider
      value={{
        isOpenOnSmallScreens: isOpen,
        isPageWithSidebar: true,
        setOpenOnSmallScreens: setOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export { SidebarProvider, SidebarContext };
