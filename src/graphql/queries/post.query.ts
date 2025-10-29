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
      user {
        id
        avatar
        email
        name
      }
      id
      content
      thumbnail
      updatedAt
      createdAt
    }
  }
`;

export { GET_POSTS, GET_ALL_POSTS };
