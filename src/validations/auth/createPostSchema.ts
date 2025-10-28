import * as yup from "yup";

export const createPostSchema = yup.object().shape({
  content: yup
    .string()
    .min(2, "Content must be at least 2 characters")
    .required("Content is required"),
});
