export enum SliceStatusName {
  IDLE = 'idle',
  LOADING = 'loading',
  FAILED = 'failed',
}
export type SliceLoginStatus =
  | SliceStatusName.IDLE
  | SliceStatusName.LOADING
  | SliceStatusName.FAILED;

export interface CounterSliceState {
  value: number;
  status: SliceLoginStatus;
}
