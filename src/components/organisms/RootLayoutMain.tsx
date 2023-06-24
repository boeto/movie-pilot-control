import { NavbarSidebarLayout } from '@/components';

const RootLayoutMain = ({ children }: { children: React.ReactNode }) => {
  return <NavbarSidebarLayout>{children}</NavbarSidebarLayout>;
};

export { RootLayoutMain };
