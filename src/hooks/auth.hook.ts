import { useMutation } from "@apollo/client/react";
import type { ApolloError } from "@apollo/client";
import type { ValidationError } from "yup";
import { LOGIN, CREATE_USER } from "@/graphql";
import type {
  SignInResponse,
  SignInDto,
  CreateUserDto,
  CreateUserResponse,
} from "@/interfaces";
import toast from "react-hot-toast";
import { signInSchema, signUpSchema } from "@/validations";
import { useNavigate } from "react-router";
import { URL } from "@/constants";
import { useAuth } from "@/contexts";

const useLogin = () => {
  const navigate = useNavigate();
  const { refetchUser } = useAuth();

  const [signInMutation, { loading }] = useMutation<
    SignInResponse,
    { signInDto: SignInDto }
  >(LOGIN);

  const handleSignIn = async (formData: SignInDto) => {
    try {
      await signInSchema.validate(formData, { abortEarly: false });
    } catch (error) {
      const err = error as ValidationError;
      if (err.inner && err.inner.length > 0) {
        err.inner.forEach((e) => {
          if (e.message) {
            toast.error(e.message, { position: "top-right" });
          }
        });
      }
      return;
    }

    await toast.promise(
      (async () => {
        const { data } = await signInMutation({
          variables: { signInDto: formData },
          context: { credentials: "include" },
        });
        await refetchUser();
        navigate(URL.HOME);
        return data;
      })(),
      {
        loading: "Trying to sign in...",
        success: () => "Signed in successfully!",
        error: (error: unknown) => {
          const apolloErr = error as ApolloError;
          return (
            apolloErr.graphQLErrors?.[0]?.message ||
            "An unexpected error occurred while signing in."
          );
        },
      }
    );
  };

  return { handleSignIn, loading };
};

const useSignUp = () => {
  const navigate = useNavigate();

  const [signUpMutation, { loading }] = useMutation<
    CreateUserResponse,
    { createUserDto: CreateUserDto }
  >(CREATE_USER);

  const handleSignUp = async (formData: CreateUserDto) => {
    try {
      await signUpSchema.validate(formData, { abortEarly: false });
    } catch (error) {
      const err = error as ValidationError;
      if (err.inner && err.inner.length > 0) {
        err.inner.forEach((e) => {
          if (e.message) {
            toast.error(e.message, { position: "top-right" });
          }
        });
      }
      return;
    }

    await toast.promise(
      signUpMutation({ variables: { createUserDto: formData } }),
      {
        loading: "Creating user...",
        success: () => {
          navigate(`${URL.AUTH}/${URL.SIGN_IN}`);
          return "User created successfully!";
        },
        error: (error: unknown) => {
          const apolloErr = error as ApolloError;
          return (
            apolloErr.graphQLErrors?.[0]?.message ||
            "An unexpected error occurred while creating user."
          );
        },
      }
    );
  };

  return { handleSignUp, loading };
};

export { useLogin, useSignUp, useAuth };
