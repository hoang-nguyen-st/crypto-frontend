import { gql } from "@apollo/client";

const LOGIN = gql`
  mutation SignIn($signInDto: SignInDto!) {
    signIn(signInDto: $signInDto) {
      accessToken
      avatar
      id
      name
    }
  }
`;

export { LOGIN };
