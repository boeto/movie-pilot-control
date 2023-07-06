import { redirect } from 'next/navigation';

import { getLocalePath, Locale } from '@/common';

type HomePageProps = {
  params: { locale: Locale };
};

const HomePage = async ({ params: { locale } }: HomePageProps) => {
  return redirect(getLocalePath(locale));
};

export default HomePage;
