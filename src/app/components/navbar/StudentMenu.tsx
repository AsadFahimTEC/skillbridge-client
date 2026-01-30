"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function StudentMenu(){
    return (
        <div className="flex gap-4 items-center">
            <Link href="/tutors">Tutors</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/bookings">My Bookings</Link>
            <Link href="/profile">Profile</Link>
            <Button>Logout</Button>
        </div>
    );
}