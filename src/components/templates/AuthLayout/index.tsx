import { Outlet } from "react-router";
import "./style.css";

export default function AuthLayout() {
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
