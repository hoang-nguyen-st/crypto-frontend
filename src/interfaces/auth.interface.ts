import type { User } from "./user.interface";

export interface SignInDto {
  email: string;
  password: string;
}

export interface SignInResponse {
  signIn: User;
}

export interface CreateUserDto {
  name: string;
  email: string;
  password: string;
}

export interface CreateUserResponse {
  createUser: User
}
