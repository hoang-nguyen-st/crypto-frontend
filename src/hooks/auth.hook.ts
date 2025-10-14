import { useMutation } from "@apollo/client/react";
import { LOGIN, CREATE_USER } from "@/graphql";
import type { SignInResponse, SignInDto, CreateUserDto, CreateUserResponse } from "@/interfaces";

const useLogin = (signInDto: SignInDto) =>
  useMutation<SignInResponse, { signInDto: SignInDto }>(LOGIN, {
    variables: { signInDto },
  });

const useSignUp = () =>
  useMutation<CreateUserResponse, { createUserDto: CreateUserDto }>(CREATE_USER);

export { useLogin, useSignUp };
