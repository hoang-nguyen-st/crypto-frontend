import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { Toaster } from "react-hot-toast";
import router from "@/router";
import { apolloClient } from "@/configurations";

import "@/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <RouterProvider router={router} />
      <Toaster />
    </ApolloProvider>
  </StrictMode>
);
