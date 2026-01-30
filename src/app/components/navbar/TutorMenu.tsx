"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

export default function TutorMenu() {

     const handleLogout = async () => {
            await authClient.signOut();
            window.location.href="login";
        }
    
    return (
        <div className="flex gap-4 items-center">
            <Link href="/tutors">Dashboard</Link>
            <Link href="/tutors/profile">Profile</Link>
            <Link href="/tutors/availability">Availability</Link>
            <Link href="/tutors">Browser Tutors</Link>
            <Button onClick={handleLogout}>Logout</Button>
        </div>
    );
}