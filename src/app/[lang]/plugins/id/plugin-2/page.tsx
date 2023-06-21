'use client';
import { usePathname } from 'next/navigation';

export default function Plugin2Page() {
  const pathname = usePathname();
  return (
    <a className="text-gray-500">Hello Plugin2Page! My path is::: {pathname}</a>
  );
}
