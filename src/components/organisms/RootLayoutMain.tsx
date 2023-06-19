import { NavbarSidebarLayout } from '@/components';

function RootLayoutMain({ children }: { children: React.ReactNode }) {
  return <NavbarSidebarLayout>{children}</NavbarSidebarLayout>;
}

export { RootLayoutMain };
