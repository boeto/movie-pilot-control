'use client';

import { selectCount, useSelector } from '@/store';

function ShowCounter() {
  const count = useSelector(selectCount);
  return (
    <p className="text-purple-500 text-center" suppressHydrationWarning>
      showCounter: 【{count}】
    </p>
  );
}
export { ShowCounter };
