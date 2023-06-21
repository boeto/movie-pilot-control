'use client';
import { usePathname } from 'next/navigation';

export default function Plugin3Page() {
  const pathname = usePathname();
  return (
    <a className="text-gray-500">Hello Plugin3Page My path is::: {pathname}</a>
  );
}
