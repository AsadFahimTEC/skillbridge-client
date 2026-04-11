"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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

export default function NavbarUltra() {
  const { user, loading, refreshSession } = useSession();

  if (loading) return null;

  const isLoggedIn = Boolean(user);

  const menu = [
    { title: "Home", url: "/" },
    { title: "Tutors", url: "/tutors" },
    { title: "Events", url: "/events" },
    { title: "Profile", url: "/profile" },
  ];

  const renderRoleMenu = () => {
    if (!user) return null;
    if (user.role === "STUDENT") return <StudentMenu refreshSession={refreshSession} />;
    if (user.role === "TUTOR") return <TutorMenu refreshSession={refreshSession} />;
    if (user.role === "ADMIN") return <AdminMenu refreshSession={refreshSession} />;
  };

  return (
    <section className="relative z-50">

      {/* 🌌 FLOATING BACKGROUND BLOBS */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 blur-3xl rounded-full top-[-100px] left-[-100px] animate-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-pink-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px] animate-pulse" />
      </div>

      {/* 🔥 NAVBAR CONTAINER */}
      <div className="relative backdrop-blur-xl bg-black/60 border-b border-white/10 shadow-[0_0_30px_rgba(0,255,255,0.2)]">

        {/* 💡 LED RUNNING BORDER */}
        <div className="absolute inset-0 rounded-b-xl pointer-events-none">
          <div className="w-full h-[2px] bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 animate-[move_3s_linear_infinite]" />
        </div>

        <div className="container mx-auto px-4 py-4">

          {/* ---------------- DESKTOP ---------------- */}
          <nav className="hidden lg:flex justify-between items-center">

            {/* 🔥 LOGO */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-extrabold tracking-widest"
            >
              <Link href="/">
                <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,0,255,0.6)]">
                  SkillBridge
                </span>
              </Link>
            </motion.div>

            {/* 🔥 MENU */}
            <NavigationMenu>
              <NavigationMenuList className="flex gap-8">
                {!isLoggedIn &&
                  menu.map((item) => (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.url}
                          className="relative text-white text-lg group transition"
                        >
                          {item.title}

                          {/* 💡 Neon underline */}
                          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-pink-500 group-hover:w-full transition-all duration-300 shadow-[0_0_10px_cyan]" />
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}

                {renderRoleMenu()}
              </NavigationMenuList>
            </NavigationMenu>

            {/* 🔐 AUTH */}
            {!isLoggedIn && (
              <div className="flex gap-4">

                {/* Login */}
                <Button
                  asChild
                  variant="outline"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition shadow-[0_0_10px_cyan]"
                >
                  <Link href="/login">Login</Link>
                </Button>

                {/* Sign Up */}
                <Button
                  asChild
                  className="relative overflow-hidden text-black font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 shadow-[0_0_25px_rgba(255,0,255,0.7)] hover:scale-105 transition"
                >
                  <Link href="/register">
                    <span className="relative z-10">Sign Up</span>

                    {/* ✨ Shine effect */}
                    <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition duration-500 blur-xl" />
                  </Link>
                </Button>
              </div>
            )}
          </nav>

          {/* ---------------- MOBILE ---------------- */}
          <div className="flex justify-between items-center lg:hidden">

            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              SkillBridge
            </span>

            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline">
                  <Menu />
                </Button>
              </SheetTrigger>

              <SheetContent className="bg-black text-white border-l border-white/10">

                <div className="flex flex-col gap-6 mt-8">

                  {!isLoggedIn &&
                    menu.map((item) => (
                      <Link
                        key={item.title}
                        href={item.url}
                        className="text-lg hover:text-cyan-400 transition"
                      >
                        {item.title}
                      </Link>
                    ))}

                  {renderRoleMenu()}

                  {!isLoggedIn && (
                    <>
                      <Link href="/login">
                        <Button variant="outline" className="w-full">
                          Login
                        </Button>
                      </Link>

                      <Link href="/register">
                        <Button className="w-full bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 text-black">
                          Sign Up
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* 🎬 KEYFRAMES */}
      <style jsx>{`
        @keyframes move {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}