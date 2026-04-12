"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { useSession } from "@/hooks/useSession";
import StudentMenu from "@/app/components/navbar/StudentMenu";
import TutorMenu from "@/app/components/navbar/TutorMenu";
import AdminMenu from "@/app/components/navbar/AdminMenu";
import VendorMenu from "@/app/components/navbar/VendorMenu";
import OrganizerMenu from "@/app/components/navbar/OrganizerMenu";

export default function NavbarUltra() {
  const { user, refreshSession } = useSession();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const menu = [
    { title: "Home", url: "/" },
    { title: "Tutors", url: "/tutors" },
    { title: "Bookings", url: "/bookings" },
    { title: "Profile", url: "/profile" },
  ];

  const isLoggedIn = Boolean(user);

  const renderRoleMenu = () => {
    if (!user) return null;
    if (user.role === "User")
      return <StudentMenu refreshSession={refreshSession} />;
    if (user.role === "Admin")
      return <TutorMenu refreshSession={refreshSession} />;
    if (user.role === "Manager")
      return <AdminMenu refreshSession={refreshSession} />;
    if (user.role === "Vendor")
      return <VendorMenu refreshSession={refreshSession} />;
    if (user.role === "Organizer")
      return <OrganizerMenu refreshSession={refreshSession} />;
  };

  if (!mounted) {
    return (
      <div className="h-16 w-full bg-black animate-pulse border-b border-white/10" />
    );
  }

  return (
    <section className="relative z-50 bg-black text-white border-b border-white/10 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full -top-40 -left-40 animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-3xl rounded-full -bottom-40 -right-40 animate-pulse" />
      </div>

      {/* NAVBAR */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="backdrop-blur-2xl bg-black/60"
      >
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/">
            <span className="text-lg sm:text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              SkillBridge
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex gap-8">

              {!isLoggedIn &&
                menu.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink asChild>
                      <Link
                        className="hover:text-cyan-400 transition text-sm sm:text-base"
                        href={item.url}
                      >
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}

              {renderRoleMenu()}
            </NavigationMenuList>
          </NavigationMenu>

          {/* AUTH BUTTONS (DESKTOP) */}
          <div className="hidden lg:flex gap-3 xl:gap-4 items-center">

            {!isLoggedIn && (
              <>
                <Button asChild variant="outline" className="bg-gradient-to-r from-green-400 to-red-500 text-black">
                  <Link href="/login">Login</Link>
                </Button>

                <Button asChild className="bg-gradient-to-r from-cyan-400 to-pink-500 text-black">
                  <Link href="/register">Sign Up</Link>
                </Button>
              </>
            )}
          </div>

          {/* MOBILE MENU */}
          <div className="lg:hidden">

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-cyan-400 text-white"
                >
                  <Menu />
                </Button>
              </SheetTrigger>

              {/* ✅ FIXED RIGHT SIDE DRAWER */}
              <SheetContent
                side="right"
                className="w-[85%] sm:w-[400px] bg-black text-white border-l border-white/10 p-6"
              >

                <div className="flex flex-col gap-6 mt-10">

                  {/* NAV LINKS */}
                  {!isLoggedIn &&
                    menu.map((item) => (
                      <Link
                        key={item.title}
                        href={item.url}
                        className="text-lg py-2 border-b border-white/10 hover:text-cyan-400 transition"
                      >
                        {item.title}
                      </Link>
                    ))}

                  {/* ROLE MENU */}
                  {renderRoleMenu()}

                  {/* AUTH */}
                  {!isLoggedIn && (
                    <div className="flex flex-col gap-3 mt-6">

                      <Link href="/login">
                        <Button className="w-full bg-gradient-to-r from-green-400 to-red-500 text-black" variant="outline">
                          Login
                        </Button>
                      </Link>

                      <Link href="/register">
                        <Button className="w-full bg-gradient-to-r from-cyan-400 to-pink-500 text-black">
                          Sign Up
                        </Button>
                      </Link>

                    </div>
                  )}
                </div>

              </SheetContent>
            </Sheet>

          </div>

        </div>
      </motion.div>
    </section>
  );
}