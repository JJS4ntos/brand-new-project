export interface UserJWT {
  userId: string;
}

export interface IJWT {
  sign(user: UserJWT): Promise<string>;
  verify(token: string): Promise<UserJWT | null>;
}
