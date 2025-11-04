import type { LucideIcon } from "lucide-react";

export interface SidebarInterfaceProps {
  icon: LucideIcon;
  label: string;
  path: string;
  roles?: string[];
}
