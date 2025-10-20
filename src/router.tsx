import { URL } from "./constants";
import { createBrowserRouter, Outlet } from "react-router-dom";
import {
  privateRouters,
  publicRouters,
  authRouters,
  adminRouters,
} from "@/routes/index";
import { AuthProvider } from "./contexts";

const router = createBrowserRouter([
  {
    path: URL.FEED,
    element: (
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    ),
    errorElement: <div>Not Found</div>,
    children: [
      ...publicRouters,
      ...privateRouters,
      ...authRouters,
      ...adminRouters,
    ],
  },
]);

export default router;
