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
  mutation Logout {
    logout
  }
`;

export { LOGIN, CREATE_USER, LOGOUT };
