"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

interface MenuProps {
  refreshSession: () => void;
}

export default function StudentMenu({ refreshSession }: MenuProps) {
  const handleLogout = async () => {
    await authClient.signOut();
    refreshSession(); // update session dynamically
  };

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
