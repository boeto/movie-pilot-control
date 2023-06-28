'use client';
import { AnyAction, combineReducers, createAction } from '@reduxjs/toolkit';
import { counterSlice, uiSlice, authSlice } from './slices';
import { ReduxState } from './types';
import { storage } from './storage';
import { persistReducer } from 'redux-persist';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['counter'],
  blacklist: ['auth'],
};

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'isLogin'],
};

export const rootReducers = {
  counter: counterSlice.reducer,
  ui: uiSlice.reducer,
  auth: persistReducer(authPersistConfig, authSlice.reducer),
};

export const rootReducer = combineReducers(rootReducers);

export const resetAll = createAction('resetAll');
export const rootReducerWithResetAll = (
  state: ReduxState | undefined,
  action: AnyAction,
) => {
  if (action.type === resetAll.type) {
    storage.removeItem('persist:root');
    storage.removeItem('persist:auth');
    state = undefined;
  }
  return rootReducer(state, { resetAll, ...action });
};

export const persistedReducer = persistReducer(
  rootPersistConfig,
  rootReducerWithResetAll,
);
