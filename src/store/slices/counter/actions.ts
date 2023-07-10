import { createAction } from '@reduxjs/toolkit';

import { nameSpace } from './types';

const setIncrementByAmount = createAction<number>(
  `${nameSpace}/setIncrementByAmount`,
);
const setIncrement = createAction(`${nameSpace}/setIncrement`);
const setDecrement = createAction(`${nameSpace}/setDecremen`);

export { setDecrement, setIncrement, setIncrementByAmount };
