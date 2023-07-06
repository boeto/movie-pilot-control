'use client';

import { FC } from 'react';
import { usePathname } from 'next/navigation';

const PluginsIDAPage: FC = () => {
  const pathname = usePathname();
  return (
    <div className="text-gray-500">
      Hello PluginsIDAPage! My path is::: {pathname}
    </div>
  );
};
export default PluginsIDAPage;
