import { Outlet } from "react-router-dom";
import {
  HeaderDesktop,
  FooterDesktop,
  SidebarDesktop,
} from "@/components/layouts";
import { cn } from "@/libraries/utils";
import { menu } from "@/constants";
import { useState } from "react";

export default function PublicLayout() {
  const [isSidebar, setIsSidebar] = useState<boolean>(false);

  const handleSidebar = () => {
    setIsSidebar(!isSidebar);
  };

  return (
    <>
      <div>
        <HeaderDesktop
          handleSidebar={handleSidebar}
          isSidebar={isSidebar}
          menu={menu}
        />
        <SidebarDesktop
          handleSidebar={handleSidebar}
          isSidebar={isSidebar}
          menu={menu}
        />
      </div>
      <main className={cn("p-20")}>
        <Outlet />
      </main>
      <FooterDesktop />
    </>
  );
}
