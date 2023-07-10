'use client';

import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import { isClient } from '@/utils';

import {
  persistedReducer,
  ReduxReducer,
  rootReducerWithResetAll,
} from './reducer';

const makeReduxStoreConfig = (reduxReducer: ReduxReducer) =>
  configureStore({
    reducer: reduxReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        serializableCheck: false,
      }).concat();
    },
  });

const makeReduxStore = () => {
  if (!isClient()) {
    return { reduxStore: makeReduxStoreConfig(rootReducerWithResetAll) };
  }

  const reduxStore = makeReduxStoreConfig(
    persistedReducer as unknown as ReduxReducer,
  );

  const persistor = persistStore(reduxStore);

  return { reduxStore, persistor };
};

const { reduxStore, persistor } = makeReduxStore();

type ReduxStore = typeof reduxStore;
type ReduxDispatch = typeof reduxStore.dispatch;

export { makeReduxStore, persistor, reduxStore };
export type { ReduxDispatch, ReduxStore };
