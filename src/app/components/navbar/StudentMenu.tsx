"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";


export default function StudentMenu(){

    const handleLogout = async () => {
        await authClient.signOut();
        window.location.href="login";
    }

    return (
        <div className="flex gap-4 items-center">
            <Link href="/tutors">Tutors</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/bookings">My Bookings</Link>
            <Link href="/profile">Profile</Link>
            <Button onClick={handleLogout}>Logout</Button>
        </div>
    );
}