import { gql } from "@apollo/client";

const ME_QUERY = gql`
  query Query {
    me {
      avatar
      email
      id
      name
      role
    }
  }
`;

export { ME_QUERY };
