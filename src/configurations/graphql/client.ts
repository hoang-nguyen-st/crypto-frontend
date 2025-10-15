import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: import.meta.env.VITE_API_URL,
    credentials: "include",
  }),
  cache: new InMemoryCache(),
});

export { client };
