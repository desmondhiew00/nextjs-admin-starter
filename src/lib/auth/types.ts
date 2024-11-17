export interface AuthApiResponse {
  accessToken: string;
  refreshToken: string;
  accessTokenExpiresIn: number;
  user?: {
    id: number | null;
    email: string;
    fullName: string;
  };
}

export type Session = AuthApiResponse;
export type SessionUser = AuthApiResponse["user"];
