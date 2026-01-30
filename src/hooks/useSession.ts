"use client";

import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";

export const useSession = () => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        authClient.getSession().then((res) => {
            setUser(res?.data.user);
        });
    }, []);

    return user;
};