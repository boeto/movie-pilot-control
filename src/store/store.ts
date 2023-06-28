'use client';
import { configureStore } from '@reduxjs/toolkit';
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  type TypedUseSelectorHook,
} from 'react-redux';

import { persistedReducer, rootReducerWithResetAll } from './reducer';
import { middleware } from './middleware';
import { persistStore } from 'redux-persist';
import { isClient } from '@/utils';
import { ReduxDispatch, ReduxReducer, ReduxState } from './types';

const makeReduxStoreConfig = (reduxReducer: ReduxReducer) =>
  configureStore({
    reducer: reduxReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        serializableCheck: false,
      }).concat(middleware);
    },
  });

export const makeReduxStore = () => {
  if (!isClient()) {
    return { reduxStore: makeReduxStoreConfig(rootReducerWithResetAll) };
  } else {
    const reduxStore = makeReduxStoreConfig(
      persistedReducer as unknown as ReduxReducer,
    );

    const persistor = persistStore(reduxStore);

    return { reduxStore, persistor };
  }
};

const { reduxStore, persistor } = makeReduxStore();

const useDispatch = () => useReduxDispatch<ReduxDispatch>();
const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;

export { reduxStore, useDispatch, useSelector, persistor };
