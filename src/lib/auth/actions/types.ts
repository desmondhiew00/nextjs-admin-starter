export interface AuthApiResponse {
  accessToken: string;
  refreshToken: string;
  accessTokenExpiredAt: number;
  user?: {
    id: number | null;
    email: string;
    name: string;
    superAdmin: boolean;
  };
}

export type Session = AuthApiResponse;
export type SessionUser = AuthApiResponse["user"];
