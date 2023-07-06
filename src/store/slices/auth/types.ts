interface AuthSliceState {
  accessToken: string;
  isLogin: boolean;
  isLoading: boolean;
  actionError: string | undefined;
}

export type { AuthSliceState };
