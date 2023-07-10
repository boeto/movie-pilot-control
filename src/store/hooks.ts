import type { TypedUseSelectorHook } from 'react-redux';
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux';

import type { ReduxState } from './reducer';
import type { ReduxDispatch } from './store';

const useDispatch = () => useReduxDispatch<ReduxDispatch>();
const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;

export { useDispatch, useSelector };
