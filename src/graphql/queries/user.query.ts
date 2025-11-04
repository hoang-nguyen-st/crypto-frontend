import { gql } from "@apollo/client";

const GET_ALL_USERS = gql`
  query Users {
    users {
      id
      name
      email
      avatar
    }
  }
`;

export { GET_ALL_USERS };
