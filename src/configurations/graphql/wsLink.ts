import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

export const wsLink = new GraphQLWsLink(
  createClient({
    url: import.meta.env.VITE_WS_URL || "ws://localhost:6002/subscriptions",
    lazy: true,
    retryAttempts: 1,
  })
);
