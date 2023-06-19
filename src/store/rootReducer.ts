/* Instruments */
import { counterSlice, userSlice } from './slices';

export const reducer = {
  counter: counterSlice.reducer,
  user: userSlice.reducer,
};
