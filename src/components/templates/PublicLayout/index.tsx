import { Outlet } from "react-router-dom";
import { cn } from "@/libraries/utils";
import { useState } from "react";
import {
  HeaderDesktop,
  FooterDesktop,
  SidebarDesktop,
} from "@/components/layouts";
import { menu } from "@/constants";

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
