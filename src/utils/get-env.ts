import { allEnv, env } from 'next-runtime-env';

const getAllEnv = () => {
  const envs = allEnv();
  return envs;
};

const getBackendUrl = () => {
  const BackendUrl = env('NEXT_PUBLIC_BACKEND_URL') || 'http://localhost:3001';
  if (BackendUrl.endsWith('/')) return BackendUrl.slice(0, -1);
  return BackendUrl;
};

export { getAllEnv, getBackendUrl };
