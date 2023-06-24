import { Sidebar } from '@/components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

//https://github.com/themesberg/flowbite-react/issues/751

const SidebarLink: FC<PropsWithChildren & { href: string }> = ({
  children,
  href,
}) => {
  const pathname = usePathname();

  return (
    <Sidebar.Item
      as={Link}
      href={href}
      className={twMerge(
        'p-0 font-medium transition-all hover:bg-transparent lg:text-sm [&>*]:px-0',
        pathname === href
          ? 'text-primary-700 hover:text-primary-800 dark:text-primary-200'
          : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-200',
      )}
    >
      {children}
    </Sidebar.Item>
  );
};
export { SidebarLink };
