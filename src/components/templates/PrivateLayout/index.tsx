import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { URL } from "@/constants";
import { useAuth } from "@/contexts";

export default function PrivateLayout() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(URL.FEED);
    }
  }, [user, navigate]);
  return (
    <div>
      <Outlet />
    </div>
  );
}
