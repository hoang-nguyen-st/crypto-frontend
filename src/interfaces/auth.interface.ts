import type { User } from "./user.interface";

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  refetchUser: () => Promise<void>;
  logout: () => void;
}

export interface GetMeResponse {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

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
  createUser: User;
}
