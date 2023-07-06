import { FetchMethod, HeadersContentType, HeadersKeys } from '../types';

export const fetchIdentityCount = async (
  amount = 1,
): Promise<{ data: number }> => {
  const response = await fetch('/api/count', {
    method: FetchMethod.POST,
    headers: { [HeadersKeys.CONTENT_TYPE]: HeadersContentType.JSON },
    body: JSON.stringify({ amount }),
  });
  const result = await response.json();

  return result;
};
