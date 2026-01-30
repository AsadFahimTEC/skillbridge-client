"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TutorMenu() {
    return (
        <div className="flex gap-4 items-center">
            <Link href="/tutors">Dashboard</Link>
            <Link href="/tutors/profile">Profile</Link>
            <Link href="/tutors/availability">Availability</Link>
            <Link href="/tutors">Browser Tutors</Link>
            <Button>Logout</Button>
        </div>
    );
}