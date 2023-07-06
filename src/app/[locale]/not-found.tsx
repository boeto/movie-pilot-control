'use client';

import type { FC } from 'react';
import { HiChevronLeft } from 'react-icons/hi';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { getLocalePath } from '@/common';
import { Button } from '@/components';

const NotFoundPage: FC = () => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('NotFoundPage');

  const handleClick = () => {
    router.push(getLocalePath(locale));
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-16">
      <Image
        priority
        width={400}
        height={400}
        alt=""
        src="/images/illustrations/404.svg"
        className="h-auto w-full lg:max-w-md"
      />
      <h1 className="mb-6 text-2xl font-bold dark:text-white md:text-5xl">
        {t('title')}
      </h1>
      <p className="mb-6 w-4/5 text-center text-lg text-gray-500 dark:text-gray-300">
        {t('description')}
      </p>
      <Button onClick={() => handleClick()}>
        <div className="mr-1 flex items-center gap-x-2">
          <HiChevronLeft className="text-xl" /> {t('backHome')}
        </div>
      </Button>
    </div>
  );
};

export default NotFoundPage;
