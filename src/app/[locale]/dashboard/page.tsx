'use client';

import { FC } from 'react';

// import { useRouter } from 'next/navigation';
import { Button, Counter } from '@/components';
import { StatusWithoutDisabledName } from '@/components/types';
import { addToast, useDispatch } from '@/store';

const DashboardPage: FC = () => {
  // const router = useRouter();
  const dispatch = useDispatch();

  const handClick = () => {
    // router.push('/');
    dispatch(
      addToast({
        statusColor: StatusWithoutDisabledName.SUCCESS,
        message: 'Show Toast Success!',
      }),
    );
  };

  return (
    <>
      <div className="flex flex-col  items-center">
        <p className="text-gray-500">Hello DashboardPage!</p>

        <Counter />

        <Button onClick={handClick}>Show Toast</Button>
      </div>
    </>
  );
};
export default DashboardPage;
