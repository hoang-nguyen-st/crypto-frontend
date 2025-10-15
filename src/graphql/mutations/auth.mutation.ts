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

export { LOGIN, CREATE_USER };
