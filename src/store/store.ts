'use client';
import {
  configureStore,
  type ThunkAction,
  type Action,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  type TypedUseSelectorHook,
} from 'react-redux';

import { rootReducer } from './reducer';
import { middleware } from './middleware';
import { persistReducer, persistStore } from 'redux-persist';
import { storage } from './storage';
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
    return { reduxStore: makeReduxStoreConfig(rootReducer) };
  } else {
    const persistConfig = {
      key: 'root',
      storage,
      whitelist: ['user', 'counter'],
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);

    const reduxStore = makeReduxStoreConfig(
      persistedReducer as unknown as ReduxReducer,
    );

    const persistor = persistStore(reduxStore);

    return { reduxStore, persistor };
  }
};

const { reduxStore, persistor } = makeReduxStore();
console.log('🚀 ~ file: providers.tsx:9 ~ persistor:', persistor);

const useDispatch = () => useReduxDispatch<ReduxDispatch>();
const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;

export { reduxStore, useDispatch, useSelector, persistor };
