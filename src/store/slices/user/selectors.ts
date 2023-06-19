/* Instruments */
import type { ReduxState } from '@/store';

export const selectUser = (state: ReduxState) => state.user;
