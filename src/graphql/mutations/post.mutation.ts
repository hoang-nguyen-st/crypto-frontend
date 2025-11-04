import { gql } from "@apollo/client";

const CREATE_POST = gql`
  mutation Mutation($input: CreatePostDto!) {
    createPost(input: $input) {
      id
    }
  }
`;

const DELETE_POST_BY_ADMIN = gql`
  mutation Mutation($input: DeletePostByAdmin!) {
    deletePostByAdmin(input: $input)
  }
`;

export { CREATE_POST, DELETE_POST_BY_ADMIN };
