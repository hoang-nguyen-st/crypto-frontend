import { Outlet } from "react-router";
import { LeftSidebar, RightSidebar } from "@/components";

const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-background flex">
      <LeftSidebar />
      <main className="flex-1 overflow-auto">
        <div className="max-w-[900px] mx-auto py-6 px-4">
          <div className="mb-6 flex gap-4 overflow-x-auto pb-2 scrollbar-hide"></div>
          <Outlet />
        </div>
      </main>

      <RightSidebar />
    </div>
  );
};

export default PublicLayout;
