'use client';

import { FC, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { setIsSidebarOpen, useDispatch } from '@/store';
import { isSmallScreen } from '@/utils';

const SidebarMonitor: FC = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();

  // Close Sidebar on page change on mobile
  useEffect(() => {
    if (isSmallScreen()) {
      dispatch(setIsSidebarOpen(false));
    }
  }, [dispatch, pathname]);

  // Close Sidebar on mobile tap inside main content
  useEffect(() => {
    const handleMobileTapInsideMain = (event: MouseEvent) => {
      const main = document.querySelector('main');
      const isClickInsideMain = main?.contains(event.target as Node);

      if (isSmallScreen() && isClickInsideMain) {
        dispatch(setIsSidebarOpen(false));
      }
    };

    document.addEventListener('mousedown', handleMobileTapInsideMain);
    return () => {
      document.removeEventListener('mousedown', handleMobileTapInsideMain);
    };
  }, [dispatch]);

  return <></>;
};

export { SidebarMonitor };
