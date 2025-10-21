import { useNavigate, useLocation, Link } from "react-router-dom";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  CREATE_COMBINATION_TWO_AGRUMENTS,
  sidebarItems,
  URL,
} from "@/constants";

export const LeftSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <aside className="w-[280px] bg-card border-r border-border h-screen sticky top-0 flex flex-col">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2">
          <Zap className="h-8 w-8 text-primary fill-primary" />
          <span className="text-2xl font-bold text-foreground">EnderIO</span>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {sidebarItems.map((item, index: number) => (
          <Link
            key={index}
            to={item.path}
            onClick={() => navigate(item.path)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition ${
              location.pathname === item.path
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
          className="w-full bg-primary hover:bg-primary-hover text-primary-foreground rounded-xl h-12 font-medium shadow-md"
        >
          <span className="text-xl mr-2">+</span> Create Post
        </Button>
      </div>

      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=greatstack" />
            <AvatarFallback>L</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm text-foreground">Lam Hoang</p>
            <p className="text-xs text-muted-foreground">@lamhoang</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
