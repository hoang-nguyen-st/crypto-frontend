import { useMutation } from "@apollo/client/react";
import type { ApolloError } from "@apollo/client";
import type { ValidationError } from "yup";
import { LOGIN, CREATE_USER, FORGOT_PASSWORD, RESET_PASSWORD } from "@/graphql";
import type {
  SignInResponse,
  SignInDto,
  CreateUserDto,
  CreateUserResponse,
  ForgotPasswordDto,
  ForgotPasswordResponse,
  NewPasswordDto,
  NewPasswordResponse,
} from "@/interfaces";
import toast from "react-hot-toast";
import {
  signInSchema,
  signUpSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
} from "@/validations";
import { useNavigate } from "react-router";
import { URL } from "@/constants";
import { useAuth } from "@/contexts";
import { CREATE_COMBINATION_TWO_AGRUMENTS } from "@/helpers";

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
        });
        await refetchUser();
        navigate(URL.FEED);
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
          navigate(CREATE_COMBINATION_TWO_AGRUMENTS(URL.AUTH, URL.SIGN_IN));
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

const useForgotPassword = () => {
  const [forgotPasswordMutation, { loading }] = useMutation<
    ForgotPasswordResponse,
    {
      forgotPasswordDto: ForgotPasswordDto;
    }
  >(FORGOT_PASSWORD);

  const handleForgotPassword = async (formData: ForgotPasswordDto) => {
    try {
      await forgotPasswordSchema.validate(formData, { abortEarly: false });
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
      forgotPasswordMutation({
        variables: {
          forgotPasswordDto: {
            email: formData.email,
          },
        },
      }),
      {
        loading: "Sending email...",
        success: () => {
          return "A verification email has been sent.";
        },
        error: (error: unknown) => {
          const apolloErr = error as ApolloError;
          return (
            apolloErr.graphQLErrors?.[0]?.message ||
            "An unexpected error occurred while sending email."
          );
        },
      }
    );
  };

  return { handleForgotPassword, loading };
};

const useResetPassword = () => {
  const navigate = useNavigate();
  const [resetPasswordMutation, { loading }] = useMutation<
    NewPasswordResponse,
    { newPasswordDto: NewPasswordDto }
  >(RESET_PASSWORD);

  const handleResetPassword = async (payload: NewPasswordDto) => {
    if (!payload.token) {
      toast.error("Invalid or expired this link.", { position: "top-right" });
      return;
    }

    try {
      await resetPasswordSchema.validate(payload, { abortEarly: false });
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
      resetPasswordMutation({
        variables: { newPasswordDto: payload },
      }),
      {
        loading: "Resetting new password...",
        success: () => {
          navigate(CREATE_COMBINATION_TWO_AGRUMENTS(URL.AUTH, URL.SIGN_IN));
          return "Reset new password successfully!";
        },
        error: (error: unknown) => {
          const apolloErr = error as ApolloError;
          return (
            apolloErr.graphQLErrors?.[0]?.message ||
            "An unexpected error occurred while resetting new password."
          );
        },
      }
    );
  };

  return { handleResetPassword, loading };
};

export { useLogin, useSignUp, useForgotPassword, useResetPassword };
