'use client';

import { FC } from 'react';

import { selectCount, useSelector } from '@/store';

const ShowCounter: FC = () => {
  const count = useSelector(selectCount);
  return (
    <p className="text-center text-purple-500">showCounter: 【{count}】</p>
  );
};
export { ShowCounter };
