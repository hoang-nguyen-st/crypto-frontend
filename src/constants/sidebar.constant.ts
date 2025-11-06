import { URL, URL_NAME, UserRole } from "@/constants";
import type { SidebarInterfaceProps } from "@/interfaces";
import { Home, Users, User, Bot } from "lucide-react";

const sidebarItems: SidebarInterfaceProps[] = [
  {
    path: URL.FEED,
    label: URL_NAME.FEED,
    icon: Home,
    roles: [UserRole.USER, UserRole.ADMIN],
  },
  {
    path: URL.PROFILE,
    label: URL_NAME.PROFILE,
    icon: User,
    roles: [UserRole.USER, UserRole.ADMIN],
  },
  {
    path: URL.CHATBOT,
    label: URL_NAME.CHATBOT,
    icon: Bot,
    roles: [UserRole.USER, UserRole.ADMIN],
  },
  {
    path: URL.ADMIN_POSTS_MANAGEMENT,
    label: URL_NAME.ADMIN,
    icon: Users,
    roles: [UserRole.ADMIN],
  },
];

export { sidebarItems };
