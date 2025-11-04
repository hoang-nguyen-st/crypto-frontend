import { gql } from "@apollo/client";

const CHAT = gql`
  mutation Mutation($input: ChatMessage!) {
    chat(input: $input)
  }
`;

export { CHAT };
