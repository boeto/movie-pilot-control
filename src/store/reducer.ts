'use client';

import {
  Action,
  AnyAction,
  combineReducers,
  createAction,
  ThunkAction,
} from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import { authReducer } from './slices/auth/slice';
import { counterReducer } from './slices/counter/slice';
import { uiReducer } from './slices/ui/slice';
import { storage } from './storage';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['counter'],
  blacklist: ['auth', 'ui'],
};

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'isLogin'],
};
const uiPersistConfig = {
  key: 'ui',
  storage,
  whitelist: ['isSidebarOpen'],
};

const rootReducers = {
  counter: counterReducer,
  auth: persistReducer(authPersistConfig, authReducer),
  ui: persistReducer(uiPersistConfig, uiReducer),
};

const rootReducer = combineReducers(rootReducers);

const resetAll = createAction('resetAll');
const rootReducerWithResetAll = (
  state: ReduxState | undefined,
  action: AnyAction,
) => {
  if (action.type === resetAll.type) {
    storage.removeItem('persist:root');
    storage.removeItem('persist:auth');
    storage.removeItem('persist:ui');
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }
  return rootReducer(state, { resetAll, ...action });
};

const persistedReducer = persistReducer(
  rootPersistConfig,
  rootReducerWithResetAll,
);

type RootReducers = typeof rootReducers;
type ReduxReducer = typeof rootReducer;
type ReduxState = ReturnType<ReduxReducer>;
type ReduxThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action
>;

export type { ReduxReducer, ReduxState, ReduxThunkAction, RootReducers };

export {
  persistedReducer,
  resetAll,
  rootReducer,
  rootReducers,
  rootReducerWithResetAll,
};
