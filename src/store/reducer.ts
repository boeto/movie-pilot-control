'use client';
import { combineReducers } from '@reduxjs/toolkit';
import { counterSlice, userSlice, uiSlice } from './slices';
import { ReduxReducer } from './types';

export const rootReducers = {
  counter: counterSlice.reducer,
  user: userSlice.reducer,
  ui: uiSlice.reducer,
};

export const rootReducer = combineReducers(rootReducers);
