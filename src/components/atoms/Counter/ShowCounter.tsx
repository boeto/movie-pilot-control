'use client';

import { selectCount, useSelector } from '@/store';
import { useState } from 'react';

function ShowCounter({}: {
  dictionary?: {
    increment: string;
    decrement: string;
  };
}) {
  const count = useSelector(selectCount);
  return (
    <p className="text-purple-500 text-center">
      This compoment is rendered on client: 【{count}】
    </p>
  );
}
export { ShowCounter };
