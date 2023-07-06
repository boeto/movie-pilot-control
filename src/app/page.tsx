import { redirect } from 'next/navigation';

import { getLocalePath } from '@/common';

// This page only renders when the app is built statically (output: 'export')
const RootPage = () => {
  redirect(getLocalePath());
};
export default RootPage;
