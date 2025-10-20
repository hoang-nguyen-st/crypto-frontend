import type { RouteObject } from "react-router-dom";
import { PublicLayout } from "@/components";
import { Feed } from "@/pages";
import { URL } from "@/constants";

const routes: RouteObject[] = [
  {
    element: <PublicLayout />,
    children: [
      {
        element: <Feed />,
        path: URL.FEED,
      },
    ],
  },
];

export default routes;
