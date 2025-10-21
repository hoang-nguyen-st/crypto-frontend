import type { RouteObject } from "react-router-dom";
import { PublicLayout } from "@/components";
import { Feed, Messages, Connections } from "@/pages";
import { URL } from "@/constants";

const routes: RouteObject[] = [
  {
    element: <PublicLayout />,
    children: [
      {
        element: <Feed />,
        path: URL.FEED,
      },
      {
        element: <Messages />,
        path: URL.MESSAGES,
      },
      {
        element: <Connections />,
        path: URL.CONNECTIONS,
      },
    ],
  },
];

export default routes;
