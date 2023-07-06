'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { Counter } from '@/components';

const DashboardPage: FC = () => {
  const t = useTranslations('HomePage');

  return (
    <div className="flex flex-col  items-center">
      <p className="text-gray-500">Hello DashboardPage!</p>
      <p className="text-gray-500">{t('welcome')}</p>
      <Counter />
    </div>
  );
};
export default DashboardPage;
