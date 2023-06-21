'use client';
import { usePathname } from 'next/navigation';

export default function Plugin1Page() {
  const pathname = usePathname();
  return (
    <a className="text-gray-500">Hello Plugin1Page! My path is::: {pathname}</a>
  );
}
