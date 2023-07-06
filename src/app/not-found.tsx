'use client';

import Error from 'next/error';

import { Locale } from '@/common';

// This page renders when a route is requested that doesn't match the
// middleware and therefore doesn't have a locale associated with it.

const NotFound = () => {
  return (
    <html lang={Locale.ZH_CN}>
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  );
};
export default NotFound;
