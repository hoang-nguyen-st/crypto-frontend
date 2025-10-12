import type { User } from "./user.interface";

export interface SignInDto {
  email: string;
  password: string;
}

export interface SignInResponse {
  signIn: User;
}
