"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

export default function AdminMenu(){

     const handleLogout = async () => {
            await authClient.signOut();
            window.location.href="login";
        }
    

    return (
        <div>
            <Link href="/admin">Dashboard</Link>
            <Link href="/admin/users">Users</Link>
            <Link href="/admin/bookings">Bookings</Link>
            <Link href="/admin/categories">Categories</Link>
            <Button onClick={handleLogout}>Logout</Button>
        </div>
    );
}