/* Instruments */

import { type ReduxThunkAction } from '@/store';
import { createAppAsyncThunk } from '@/store';
import { fetchIdentityCount } from './fetch';
import { selectCount } from './selectors';
import { counterSlice } from './slice';

// 下面的函数被称为thunk，它允许我们执行异步逻辑。
// 它可以像常规action一样被调度：dispatch（incrementAsync（10））。
// 这将使用 dispatch 函数作为第一个参数来调用thunk。
// 异步代码可以被执行，其他的action可以被调度。Thunks通常用于发起异步请求。

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

export const incrementAsync = createAppAsyncThunk(
  'counter/fetchIdentityCount',
  async (amount: number) => {
    const response = await fetchIdentityCount(amount);

    // The value we return becomes the `fulfilled` action payload
    return response.data;
  },
);

// 我们也可以手动编写thunks，其中可以包含同步和异步逻辑。
// 下面是一个示例，根据当前状态有条件地调度actions。

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export const incrementIfOddAsync =
  (amount: number): ReduxThunkAction =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState());

    const remainder = currentValue % 2;

    if (remainder === 1) {
      dispatch(counterSlice.actions.incrementByAmount(amount));
    }
  };
