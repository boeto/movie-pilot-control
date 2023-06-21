/* Instruments */
import { combineReducers } from '@reduxjs/toolkit';
import { counterSlice, userSlice, uiSlice } from './slices';

export const reducer = {
  counter: counterSlice.reducer,
  user: userSlice.reducer,
  ui: uiSlice.reducer,
};

// 将多个 reducer 合并成一个 reducer 函数。当一个 action 被 dispatch 后，
// 这个 reducer 函数会被调用，然后它会根据 action 的 type 属性来决定如何更新应用的 state。
export const rootReducer = combineReducers(reducer);
