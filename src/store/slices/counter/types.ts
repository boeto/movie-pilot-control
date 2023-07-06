enum SliceStatusName {
  IDLE = 'idle',
  LOADING = 'loading',
  FAILED = 'failed',
}
type SliceLoginStatus =
  | SliceStatusName.IDLE
  | SliceStatusName.LOADING
  | SliceStatusName.FAILED;

interface CounterSliceState {
  value: number;
  status: SliceLoginStatus;
}

export type { CounterSliceState, SliceLoginStatus };
export { SliceStatusName };
