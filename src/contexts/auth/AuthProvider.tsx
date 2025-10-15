import { useEffect, useState, useCallback, type ReactNode } from "react";
import { ApolloError, useLazyQuery, useMutation } from "@apollo/client";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { URL } from "@/constants";
import { ME_QUERY, LOGOUT } from "@/graphql";
import type { User } from "@/interfaces";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  const [getMe, { loading, data, error }] = useLazyQuery(ME_QUERY, {
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    if (data) {
      setUser(data.me);
    }
    if (error) {
      setUser(null);
    }
  }, [data, error]);

  const [logoutMutation] = useMutation(LOGOUT);

  useEffect(() => {
    getMe();
  }, [getMe]);

  const refetchUser = useCallback(async () => {
    try {
      const { data } = await getMe();
      setUser(data?.me || null);
    } catch {
      setUser(null);
    }
  }, [getMe]);

  const logout = useCallback(async () => {
    const toastId = toast.loading("Logging out...");
    try {
      await logoutMutation({
        context: { credentials: "include" },
      });
      setUser(null);
      navigate(URL.HOME);
      toast.success("Logged out successfully!");
    } catch (error: unknown) {
      const apolloError = error as ApolloError;
      const message =
        apolloError.graphQLErrors?.[0]?.message || "Failed to logout.";
      toast.error(message);
    } finally {
      toast.dismiss(toastId);
    }
  }, [logoutMutation, navigate]);

  return (
    <AuthContext.Provider value={{ user, loading, refetchUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
