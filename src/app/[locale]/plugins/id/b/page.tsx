'use client';

import { FC } from 'react';
import { usePathname } from 'next/navigation';

const PluginsIDBPage: FC = () => {
  const pathname = usePathname();
  return (
    <div className="text-gray-500">
      Hello PluginsIDBPage! My path is::: {pathname}
    </div>
  );
};
export default PluginsIDBPage;
