import { useNavigate, useLocation, Link } from "react-router-dom";
import { LogOut, Moon, Settings, Sun, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { sidebarItems, URL } from "@/constants";
import { useAuth } from "@/contexts";
import { useTheme } from "@/hooks/useTheme";
import { CREATE_COMBINATION_TWO_AGRUMENTS } from "@/helpers";
import {
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const LeftSidebar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  return (
    <aside className="w-[280px] bg-card border-r border-border h-screen sticky top-0 flex flex-col">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2">
          <Zap className="h-8 w-8 text-primary fill-primary" />
          <span className="text-2xl font-bold text-foreground">EnderIO</span>
          <button className="border-b cursor-pointer" onClick={toggleTheme}>
            {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {sidebarItems
          // .filter((item) => {
          //   if (!item.roles || item.roles.length === 0) {
          //     return true;
          //   }
          //   if(!user || !user.role){
          //     return false;
          //   }
          //   return item.roles.includes(user.role);
          // })
          .map((item, index: number) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition ${
                location.pathname === `/${item.path}`.replace("//", "/")
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-secondary"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          ))}
      </nav>

      <div className="p-4">
        <Button
          onClick={() =>
            navigate(CREATE_COMBINATION_TWO_AGRUMENTS(URL.CREATE, URL.POST))
          }
          className="w-full bg-primary hover:bg-primary-hover text-primary-foreground rounded-xl h-12 font-medium shadow-md cursor-pointer"
        >
          <span className="text-xl mr-2">+</span> Create Post
        </Button>
      </div>

      <div className="p-4 border-t border-border">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="w-full flex items-center gap-3 hover:bg-secondary rounded-lg p-2 transition-colors cursor-pointer">
              <Avatar className="h-10 w-10">
                <AvatarImage src={user?.avatar} />
                <AvatarFallback>{user?.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0 text-left">
                <p className="font-medium text-sm text-foreground">
                  {user?.name}
                </p>
                <p className="text-xs text-muted-foreground line-clamp-1 text-ellipsis">
                  {user?.email}
                </p>
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="top" align="start" className="mb-2">
            <div className="px-2 py-3">
              <div className="flex items-center gap-3 mb-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={user?.avatar} />
                  <AvatarFallback>{user?.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-foreground">
                    {user?.name}
                  </p>
                  <p className="text-xs text-muted-foreground line-clamp-1">
                    {user?.email}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 text-xs">
                  <Settings className="h-3 w-3 mr-1" />
                  Manage account
                </Button>
                <Button
                  onClick={() => logout()}
                  variant="outline"
                  size="sm"
                  className="flex-1 text-xs text-red-400 hover:text-red-400 cursor-pointer"
                >
                  <LogOut className="h-3 w-3 mr-1" />
                  Sign out
                </Button>
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer"></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </aside>
  );
};
