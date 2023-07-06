'use client';

import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

import { isClient } from '@/utils';

const createNoopStorage = () => {
  return {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getItem(_key: string) {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: any) {
      return Promise.resolve(value);
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    removeItem(_key: string) {
      return Promise.resolve();
    },
  };
};

const storage = isClient() ? createWebStorage('local') : createNoopStorage();

export { storage };
