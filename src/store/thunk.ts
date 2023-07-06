import { createAsyncThunk } from '@reduxjs/toolkit';

import { ReduxState } from './reducer';
import { ReduxDispatch } from './store';

/**
 * create a typed Async Thnuk Actions.
 */
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: ReduxState;
  dispatch: ReduxDispatch;
  rejectValue: string;
}>();
