import type { RouteObject } from "react-router-dom";
import { AuthLayout } from "@/components";
import { SignUp, SignIn, ForgotPassword, ResetPassword } from "@/pages";
import { URL } from "@/constants";

const routes: RouteObject[] = [
  {
    element: <AuthLayout />,
    path: URL.AUTH,
    children: [
      {
        element: <SignUp />,
        path: URL.SIGN_UP,
      },
      {
        element: <SignIn />,
        path: URL.SIGN_IN,
      },
      {
        element: <ForgotPassword/>,
        path: URL.FORGOT_PASSWORD,
      },
      {
        element: <ResetPassword/>,
        path: URL.RESET_PASSWORD,
      },
    ],
  },
];

export default routes;
