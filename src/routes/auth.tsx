import type { RouteObject } from "react-router-dom";
import { AuthLayout } from "@/components";
import { SignUp, SignIn } from "@/pages";
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
    ],
  },
];

export default routes;
