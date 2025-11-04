import type { RouteObject } from "react-router-dom";
import { AdminLayout } from "@/components";
import { URL } from "@/constants";
import { AdminDashboard, AdminPosts, Chatbot } from "@/pages";

const routes: RouteObject[] = [
  {
    element: <AdminLayout />,
    path: URL.ADMIN,
    children: [
      {
        element: <AdminDashboard />,
        index: true,
      },
      {
        element: <Chatbot />,
        path: URL.CHATBOT,
        index: true,
      },
      {
        element: <AdminPosts />,
        path: URL.ADMIN_POSTS_MANAGEMENT,
        index: true,
      },
    ],
  },
];

export default routes;
