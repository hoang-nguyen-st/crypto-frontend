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

const GET_ALL_POSTS = gql`
  query Query {
    posts {
      id
      thumbnail
      content
    }
  }
`;

export { GET_POSTS, GET_ALL_POSTS };
