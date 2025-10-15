import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),

  name: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
});
