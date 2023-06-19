import { SliceLoginStatus } from '../slices.types';

export interface CounterSliceState {
  value: number;
  status: SliceLoginStatus;
}
