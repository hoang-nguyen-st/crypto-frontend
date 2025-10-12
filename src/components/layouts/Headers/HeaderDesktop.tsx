import { Link } from "react-router-dom";
import type { PropsWithChildren, FC } from "react";
import type { MenuInterfaceProps } from "@/interfaces";
import { Menu } from "lucide-react";
import { cn } from "@/libraries/utils";

interface HeaderDesktopInterfaceProps {
  props?: PropsWithChildren;
  menu: MenuInterfaceProps[];
  isSidebar: boolean;
  handleSidebar: () => void;
}

const HeaderDesktop: FC<HeaderDesktopInterfaceProps> = ({
  menu,
  handleSidebar,
}) => {
  return (
    <header className="h-20 px-20 bg-slate-600 fixed w-full z-50 border-b-white border-[1px]">
      <nav className="flex items-center justify-between h-full">
        <Link
          to={{ pathname: "/" }}
          className="text-xl font-bold text-white hidden md:block"
        >
          AZT
        </Link>
        <Menu
          onClick={() => handleSidebar()}
          className={cn("text-xl cursor-pointer text-white block md:hidden")}
        />
        <div className={cn("hidden md:block")}>
          <ul className="flex items-center justify-between gap-x-8 text-white">
            {menu.length > 0 &&
              menu.map((item, index) => (
                <li key={index}>
                  <Link to={{ pathname: item.path }}>{item.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export { HeaderDesktop };
