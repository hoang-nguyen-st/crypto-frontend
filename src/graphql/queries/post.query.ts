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

const GET_OWN_POSTS = gql`
  query Query {
    getPostBelongToUser {
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

export { GET_POSTS, GET_ALL_POSTS, GET_OWN_POSTS };
