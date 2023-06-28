import { getBackendUrl } from '@/utils';

export const fetchBackend = (
  endpoint: string,
  init?: RequestInit | undefined,
) => fetch(`${getBackendUrl()}${endpoint}`, init);
