import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

const uploadLink = createUploadLink({
  uri: import.meta.env.VITE_API_URL,
  credentials: "include",
});

const client = new ApolloClient({
  link: uploadLink,
  cache: new InMemoryCache(),
});

export { client };
