import type { UserRole } from "@/constants";
import type { User } from "./user.interface";

export interface GetMeResponse {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: UserRole;
}

export interface AuthContextType {
  user: GetMeResponse | null;
  loading: boolean;
  refetchUser: () => Promise<void>;
  logout: () => void;
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

export interface ForgotPasswordDto {
  email: string;
}

export interface ForgotPasswordResponse {
  forgotPassword: string;
}

export interface PasswordsInputDto {
  password: string;
  confirmPassword: string;
}

export interface NewPasswordDto {
  password: string;
  confirmPassword: string;
  token: string;
}

export interface NewPasswordResponse {
  resetPasswod: string;
}

