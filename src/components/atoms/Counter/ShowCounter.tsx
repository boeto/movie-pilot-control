'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { selectCount, useSelector } from '@/store';

const ShowCounter: FC = () => {
  const t = useTranslations('HomePage');
  const count = useSelector(selectCount);
  return (
    <p className="text-center text-purple-500">
      showCounter: 【{count}】{t('welcome')}
    </p>
  );
};
export { ShowCounter };
