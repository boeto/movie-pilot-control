import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ReduxState } from './reducer';
import type { ReduxDispatch } from './store';

/**
 * create a typed Async Thnuk Actions.
 */
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: ReduxState;
  dispatch: ReduxDispatch;
  rejectValue: string;
}>();
