import { Action, ThunkAction } from '@reduxjs/toolkit';
import { reduxStore } from './store';
import { rootReducers, rootReducer } from './reducer';

export type RootReducers = typeof rootReducers;

export type ReduxStore = typeof reduxStore;

export type ReduxReducer = typeof rootReducer;
export type ReduxState = ReturnType<ReduxReducer>;

export type ReduxDispatch = typeof reduxStore.dispatch;

export type ReduxThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action
>;
