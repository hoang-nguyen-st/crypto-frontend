import { PrivateLayout } from "@/components/templates/";
import type { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    element: <PrivateLayout />,
    children: [],
  },
];

export default routes;
