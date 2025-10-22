import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { LeftSidebar, RightSidebar } from "@/components";
import { useAuth } from "@/contexts";
import { URL, CREATE_COMBINATION_TWO_AGRUMENTS } from "@/constants";

const PublicLayout = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(CREATE_COMBINATION_TWO_AGRUMENTS(URL.AUTH, URL.SIGN_IN));
    }
  }, [user, navigate]);
  return (
    <div className="min-h-screen bg-background flex">
      <LeftSidebar />
      <main className="flex-1 overflow-auto">
        <div className="max-w-[900px] mx-auto py-6 px-4 main">
          <Outlet />
        </div>
      </main>

      <RightSidebar />
    </div>
  );
};

export default PublicLayout;
