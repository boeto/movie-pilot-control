import { fetchIdentityCount } from '@/service';
import { createAppAsyncThunk } from '@/store/thunk';

// thunk
// TODO: addMatcher
// https://jinyang79.github.io/blog/everyday/redux-toolkit

const setIncrementAsync = createAppAsyncThunk(
  'counter/fetchIdentityCount',
  async (amount: number) => {
    const response = await fetchIdentityCount(amount);

    // The value we return becomes the `fulfilled` action payload
    return response.data;
  },
);

export { setIncrementAsync };
