"use client";

import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { UserRole } from "@/constants/roles";

export type SessionUser = {
  id: string;
  email: string;
  name?: string;
  image?: string | null; // ✅ FIXED
  role?: UserRole;
};

export const useSession = () => {
  const [user, setUser] = useState<SessionUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSession = async () => {
      const res = await authClient.getSession();

      if (res?.data?.user) {
        // ✅ types now match perfectly
        setUser(res.data.user);
      } else {
        setUser(null);
      }

      setLoading(false);
    };

    loadSession();
  }, []);

  return { user, loading };
};
