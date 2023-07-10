import { createSlice } from '@reduxjs/toolkit';

import { setDecrement, setIncrement, setIncrementByAmount } from './actions';
import { setIncrementAsync } from './thunks';
import type { CounterState } from './types';
import { nameSpace, SliceStatusName } from './types';

import type { ReduxState, ReduxThunkAction } from '../../reducer';

const initialState: CounterState = {
  value: 1,
  status: SliceStatusName.IDLE,
};

const counterSlice = createSlice({
  name: nameSpace,
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(setIncrement, (state) => {
        state.value += 1;
      })
      .addCase(setDecrement, (state) => {
        state.value -= 1;
      })
      .addCase(setIncrementByAmount, (state, action) => {
        state.value += action.payload;
      })

      .addCase(setIncrementAsync.pending, (state) => {
        state.status = SliceStatusName.LOADING;
      })
      .addCase(setIncrementAsync.fulfilled, (state, action) => {
        state.status = SliceStatusName.IDLE;
        state.value += action.payload;
      });
  },
});

// reducer
const counterReducer = counterSlice.reducer;

// state
const selectCount = (state: ReduxState) => {
  return state.counter.value;
};

// thunk without dependency cycle here
const setIncrementIfOddAsync =
  (amount: number): ReduxThunkAction =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState());

    const remainder = currentValue % 2;

    if (remainder === 1) {
      dispatch(setIncrementByAmount(amount));
    }
  };

export { counterReducer, selectCount, setIncrementIfOddAsync };
