import type { RouteObject } from "react-router-dom";
import { PublicLayout } from "@/components";
import {
  Feed,
  Messages,
  Connections,
  Discover,
  Profile,
  CreatePost,
} from "@/pages";
import { CREATE_COMBINATION_TWO_AGRUMENTS, URL } from "@/constants";

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
      {
        element: <Discover />,
        path: URL.DISCOVER,
      },
      {
        element: <Profile />,
        path: URL.PROFILE,
      },
      {
        element: <CreatePost />,
        path: CREATE_COMBINATION_TWO_AGRUMENTS(URL.CREATE, URL.POST),
      },
    ],
  },
];

export default routes;
