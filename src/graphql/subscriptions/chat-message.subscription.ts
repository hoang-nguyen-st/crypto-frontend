import { gql } from "@apollo/client";

export const chatMessage = gql`
  subscription Subscription {
    chatMessage
  }
`;
