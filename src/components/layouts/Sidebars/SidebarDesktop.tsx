import { cn } from "@/libraries/utils";
import { X } from "lucide-react";
import { Link } from "react-router";
import type { FC } from "react";
import type { MenuInterfaceProps } from "@/interfaces";

interface SidebarInterfaceProps {
  menu: MenuInterfaceProps[];
  isSidebar: boolean;
  handleSidebar: () => void;
}

const SidebarDesktop: FC<SidebarInterfaceProps> = ({
  menu,
  handleSidebar,
  isSidebar,
}) => {
  return (
    <div
      className={cn(
        "fixed h-screen w-[300px] bg-slate-600 z-[51] text-white block md:hidden transition duration-300 -translate-x-[300px]",
        `${isSidebar && "translate-x-[0px]"}`
      )}
    >
      <div className={cn("flex items-center justify-between py-8 px-6")}>
        <h1 className={cn("text-xl font-bold")}>AZT</h1>
        <X
          onClick={() => handleSidebar()}
          className={cn("block md:hidden cursor-pointer text-white")}
        />
      </div>
      <div className={cn("mt-4 pr-6")}>
        <ul>
          {menu.length > 0 &&
            menu.map((item, index) => (
              <Link
                key={index}
                className={cn(
                  "block ml-4 py-2 pr-2 hover:bg-slate-700 hover:text-white transition my-4 rounded-sm"
                )}
                to={{ pathname: item.path }}
              >
                <span className={cn("pl-2")}>{item.name}</span>
              </Link>
            ))}
        </ul>
      </div>
    </div>
  );
};

export { SidebarDesktop };
