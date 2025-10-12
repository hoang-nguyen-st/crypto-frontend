import { useMutation } from "@apollo/client";
import { LOGIN } from "@/graphql";
import type { SignInResponse, SignInDto } from "@/interfaces";

const useLogin = (signInDto: SignInDto) =>
  useMutation<SignInResponse, { signInDto: SignInDto }>(LOGIN, {
    variables: { signInDto },
  });

export { useLogin };
