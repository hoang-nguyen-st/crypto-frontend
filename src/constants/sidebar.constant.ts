import { URL, URL_NAME } from "@/constants";
import type { SidebarInterfaceProps } from "@/interfaces";
import { Home, Users, User, Bot } from "lucide-react";

const sidebarItems: SidebarInterfaceProps[] = [
  {
    path: URL.FEED,
    label: URL_NAME.FEED,
    icon: Home,
  },
  {
    path: URL.PROFILE,
    label: URL_NAME.PROFILE,
    icon: User,
  },
  {
    path: URL.CHATBOT,
    label: URL_NAME.CHATBOT,
    icon: Bot,
  },
  {
    path: URL.ADMIN_POSTS_MANAGEMENT,
    label: URL_NAME.ADMIN,
    icon: Users,
  },
];

export { sidebarItems };
