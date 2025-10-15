import * as yup from "yup";

const signInSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
});

export default signInSchema;