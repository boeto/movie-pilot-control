'use client';

import { useState } from 'react';

import { Button } from '@/components/atoms/Button';
import {
  selectCount,
  setDecrement,
  setIncrement,
  setIncrementAsync,
  setIncrementByAmount,
  setIncrementIfOddAsync,
  useDispatch,
  useSelector,
} from '@/store';

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  const [incrementAmount, setIncrementAmount] = useState(2);

  return (
    <div className="m-5 flex flex-col items-center">
      <div className="flex items-center justify-center">
        <Button
          className="mr-4"
          aria-label="Decrement value"
          onClick={() => dispatch(setDecrement())}
        >
          -
        </Button>
        <span className="text-gray-900 dark:text-gray-100">{count}</span>
        <Button
          className="ml-4"
          aria-label="Increment value"
          onClick={() => dispatch(setIncrement())}
        >
          +
        </Button>
      </div>
      <div className="mt-4 flex items-center">
        <input
          className="h-10 w-12 rounded-md border-2 border-blue-500 text-center text-gray-900 dark:bg-gray-800 dark:text-gray-100"
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value ?? 0))}
        />

        <Button
          className="ml-4"
          color="primary"
          onClick={() => dispatch(setIncrementByAmount(incrementAmount))}
        >
          Add Amount
        </Button>
        <Button
          className="asyncButton ml-4"
          onClick={() => dispatch(setIncrementAsync(incrementAmount))}
        >
          Add Async
        </Button>
        <Button
          className="ml-4"
          onClick={() => dispatch(setIncrementIfOddAsync(incrementAmount))}
        >
          Add If Odd
        </Button>
      </div>
    </div>
  );
};
