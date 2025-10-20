import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { useAuth } from "@/contexts";
import { URL } from "@/constants";

import "./style.css";

export default function AuthLayout() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(URL.FEED);
    }
  }, [user, navigate]);

  return (
    <section>
      <div className="auth-layout">
        <Outlet />
      </div>
      <div className="air air1"></div>
      <div className="air air2"></div>
      <div className="air air3"></div>
      <div className="air air4"></div>
    </section>
  );
}
