import { getBackendUrl } from '@/utils/get-env';

export const fetchBackend = (
  endpoint: string,
  init?: RequestInit | undefined,
) => fetch(`${getBackendUrl()}${endpoint}`, init);
