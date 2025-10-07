import { gql } from "@apollo/client";

const GET_POSTS = gql`
  query getPosts {
    posts {
      id
      comments {
        id
      }
    }
  }
`;

export { GET_POSTS };
