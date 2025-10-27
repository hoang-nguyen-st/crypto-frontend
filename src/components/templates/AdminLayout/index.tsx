import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { URL, UserRole } from "@/constants";
import { useAuth } from "@/contexts";

const AdminLayout = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== UserRole.ADMIN) {
      navigate(URL.FEED);
    }
  }, [user, navigate]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
