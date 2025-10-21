import { URL, URL_NAME } from "@/constants";
import type { SidebarInterfaceProps } from "@/interfaces";
import { Home, MessageSquare, Users } from "lucide-react";

const sidebarItems: SidebarInterfaceProps[] = [
  {
    path: URL.FEED,
    label: URL_NAME.FEED,
    icon: Home,
  },
  {
    path: URL.MESSAGES,
    label: URL_NAME.MESSAGES,
    icon: MessageSquare,
  },
  {
    path: URL.CONNECTIONS,
    label: URL_NAME.CONNECTIONS,
    icon: Users,
  }
];

export { sidebarItems };
