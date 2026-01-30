"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AdminMenu(){
    return (
        <div>
            <Link href="/admin">Dashboard</Link>
            <Link href="/admin/users">Users</Link>
            <Link href="/admin/bookings">Bookings</Link>
            <Link href="/admin/categories">Categories</Link>
            <Button>Logout</Button>
        </div>
    );
}