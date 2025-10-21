import { URL, URL_NAME } from "@/constants";
import type { SidebarInterfaceProps } from "@/interfaces";
import { Home, MessageSquare } from "lucide-react";

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
];

export { sidebarItems };
