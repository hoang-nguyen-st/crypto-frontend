import { URL } from "./constants";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { privateRouters, publicRouters, authRouters } from "@/routes/index";
import { AuthProvider } from "./contexts";

const router = createBrowserRouter([
  {
    path: URL.HOME,
    element: (
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    ),
    errorElement: <div>Not Found</div>,
    children: [...publicRouters, ...privateRouters, ...authRouters],
  },
]);

export default router;
