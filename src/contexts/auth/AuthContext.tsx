import { createContext } from "react";
import type { AuthContextType } from "@/interfaces";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
