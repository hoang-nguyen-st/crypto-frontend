import type { RouteObject } from "react-router-dom";
import { PublicLayout } from "@/components";
import { Home } from "@/pages";
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
];

export default routes;
