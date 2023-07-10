enum SliceStatusName {
  IDLE = 'idle',
  LOADING = 'loading',
  FAILED = 'failed',
}
type SliceLoginStatus =
  | SliceStatusName.IDLE
  | SliceStatusName.LOADING
  | SliceStatusName.FAILED;

interface CounterState {
  value: number;
  status: SliceLoginStatus;
}

const nameSpace = 'counter';

export type { CounterState, SliceLoginStatus };
export { nameSpace, SliceStatusName };
