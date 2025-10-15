import { useMutation } from "@apollo/client/react";
import { LOGIN, CREATE_USER } from "@/graphql";
import type {
  SignInResponse,
  SignInDto,
  CreateUserDto,
  CreateUserResponse,
} from "@/interfaces";
import toast from "react-hot-toast";
import signUpSchema from "@/pages/Auth/SignUp/validation/userValidator";
import signInSchema from "@/pages/Auth/SignIn/validation/loginValidation";
import { useNavigate } from "react-router";
import { URL } from "@/constants";

const useLogin = () => {
  const navigate = useNavigate();
  const [signInMutation, { loading }] = useMutation<
    SignInResponse,
    { signInDto: SignInDto }
  >(LOGIN);

  const handleSignIn = async (formData: SignInDto) => {
    try {
      await signInSchema.validate(formData, { abortEarly: false });
    } catch (err: any) {
      if (err.inner) {
        err.inner.forEach((e: any) => {
          toast.error(e.message, { position: "top-right" });
        });
      }
      return;
    }

    toast.promise(
      signInMutation({
        variables: { signInDto: formData },
      }),
      {
        loading: "trying to sign in...",
        success: () => {
          navigate(URL.HOME);
          return "sign in sucessfully!";
        },
        error: (err) =>
          err?.graphQLErrors?.[0]?.message ||
          "An unexpected error occurred while siging in.",
      }
    );
  };
  return {
    handleSignIn,
    loading,
  };
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
    } catch (err: any) {
      if (err.inner) {
        err.inner.forEach((e: any) => {
          toast.error(e.message, { position: "top-right" });
        });
      }
      return;
    }

    toast.promise(
      signUpMutation({
        variables: { createUserDto: formData },
      }),
      {
        loading: "Creating user...",
        success: () => {
          navigate(`${URL.AUTH}/${URL.SIGN_IN}`);
          return "User created successfully!";
        },
        error: (err) =>
          err?.graphQLErrors?.[0]?.message ||
          "An unexpected error occurred while creating user.",
      }
    );
  };

  return {
    handleSignUp,
    loading,
  };
};

export { useLogin, useSignUp };
