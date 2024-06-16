export interface AuthStateModel {
  accessToken: string | null;
  refreshToken: string | null;
  expiresIn: number | null;
}
