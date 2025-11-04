import { gql } from "@apollo/client";

const LOGIN = gql`
  mutation SignIn($signInDto: SignInDto!) {
    signIn(signInDto: $signInDto) {
      name
    }
  }
`;

const CREATE_USER = gql`
  mutation Mutation($createUserDto: CreateUserDto!) {
    createUser(createUserDto: $createUserDto) {
      email
      id
      avatar
      name
    }
  }
`;

const LOGOUT = gql`
  mutation Mutation {
    signOut
  }
`;

const FORGOT_PASSWORD = gql`
  mutation ForgotPassword($forgotPasswordDto: ForgotPasswordDto!) {
    forgotPassword(forgotPasswordDto: $forgotPasswordDto)
  }
`;

const RESET_PASSWORD = gql`
  mutation ResetPassword($newPasswordDto: NewPasswordDto!) {
    resetPassword(newPasswordDto: $newPasswordDto)
  }
`;


export { LOGIN, CREATE_USER, LOGOUT, FORGOT_PASSWORD, RESET_PASSWORD };
