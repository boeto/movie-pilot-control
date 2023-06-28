'use client';
import { useState } from 'react';
import {
  counterSlice,
  useSelector,
  useDispatch,
  selectCount,
  incrementAsync,
  incrementIfOddAsync,
} from '@/store';
import { Button } from '@/components';
import { isClient } from '@/utils';

export const Counter2 = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  const [incrementAmount, setIncrementAmount] = useState(2);

  return (
    <div className="m-5">
      <div className="flex items-center justify-center">
        <Button
          className="button mr-4"
          aria-label="Decrement value"
          onClick={() => dispatch(counterSlice.actions.decrement())}
        >
          -
        </Button>
        <span className="text-gray-900 dark:text-gray-100">{count}</span>
        <Button
          className="button ml-4"
          aria-label="Increment value"
          onClick={() => dispatch(counterSlice.actions.increment())}
        >
          +
        </Button>
      </div>
      <div className="flex items-center mt-4">
        <input
          className="w-12 h-10 border-blue-500 border-2 rounded-md text-center text-gray-900 dark:bg-gray-800 dark:text-gray-100"
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value ?? 0))}
        />

        <Button
          className="button ml-4"
          color="primary"
          onClick={() =>
            dispatch(counterSlice.actions.incrementByAmount(incrementAmount))
          }
        >
          Add Amount
        </Button>
        <Button
          className="asyncButton ml-4"
          onClick={() => dispatch(incrementAsync(incrementAmount))}
        >
          Add Async
        </Button>
        <Button
          className="button ml-4"
          onClick={() => dispatch(incrementIfOddAsync(incrementAmount))}
        >
          Add If Odd
        </Button>
      </div>
    </div>
  );
};
