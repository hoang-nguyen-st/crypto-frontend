import type { RouteObject } from "react-router-dom";
import { PublicLayout, AuthLayout } from "@/components";
import { Home, SignUp, SignIn } from "@/pages";
import { URL } from "@/constants";

const routes: RouteObject[] = [
  {
    element: <PublicLayout />,
    children: [
      {
        element: <Home />,
        path: URL.HOME,
      },
    ],
  },
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
