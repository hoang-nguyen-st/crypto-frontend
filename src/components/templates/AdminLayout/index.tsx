import { URL, UserRole } from "@/constants";
import { useAuth } from "@/contexts";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

const AdminLayout = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== UserRole.ADMIN) {
      navigate(URL.HOME);
    }
  }, [user, navigate]);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
