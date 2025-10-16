import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { URL } from "@/constants";
import { useAuth } from "@/contexts";

export default function PrivateLayout() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(URL.HOME);
    }
  }, [user, navigate]);
  return (
    <div>
      <Outlet />
    </div>
  );
}
