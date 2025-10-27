import { createBrowserRouter, Outlet } from "react-router-dom";
import { privateRouters, authRouters, adminRouters } from "@/routes/index";
import { AuthProvider } from "./contexts";
import { NotFound } from "./pages";
import { URL } from "./constants";

const router = createBrowserRouter([
  {
    path: URL.FEED,
    element: (
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    ),
    errorElement: <NotFound />,
    children: [...privateRouters, ...authRouters, ...adminRouters],
  },
]);

export default router;
