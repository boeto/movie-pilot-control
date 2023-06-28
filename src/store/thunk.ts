import type { ReduxState, ReduxDispatch } from './types';
import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * A utility function to create a typed Async Thnuk Actions.
 */
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: ReduxState;
  dispatch: ReduxDispatch;
  rejectValue: string;
}>();
