'use client';

import {
  Action,
  AnyAction,
  combineReducers,
  createAction,
  ThunkAction,
} from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import {
  authReducer,
  counterReducer,
  messageReducer,
  uiReducer,
} from './slices';
import { storage } from './storage';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['counter'],
  blacklist: ['auth', 'ui', 'message'],
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
const messagePersistConfig = {
  key: 'message',
  storage,
  blacklist: ['toast', 'toastId'],
};

const rootReducers = {
  counter: counterReducer,
  auth: persistReducer(authPersistConfig, authReducer),
  ui: persistReducer(uiPersistConfig, uiReducer),
  message: persistReducer(messagePersistConfig, messageReducer),
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
    storage.removeItem('persist:message');
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
