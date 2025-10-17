import type { RouteObject } from "react-router-dom";
import { AdminLayout } from "@/components";
import { URL } from "@/constants";
import { AdminDashboard } from "@/pages";

const routes: RouteObject[] = [
  {
    element: <AdminLayout />,
    path: URL.ADMIN,
    children: [
      {
        element: <AdminDashboard />,
        index: true,
      },
    ],
  },
];

export default routes;
