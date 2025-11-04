import { createUploadLink } from "apollo-upload-client";

export const httpLink = createUploadLink({
  uri: import.meta.env.VITE_API_URL,
  credentials: "include",
});
