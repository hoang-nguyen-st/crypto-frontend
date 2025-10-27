import { gql } from "@apollo/client";

const CREATE_POST = gql`
  mutation Mutation($input: CreatePostDto!) {
    createPost(input: $input) {
      id
    }
  }
`;

export { CREATE_POST };
