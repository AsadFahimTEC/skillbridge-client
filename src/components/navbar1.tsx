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
    if (user.role === "STUDENT")
      return <StudentMenu refreshSession={refreshSession} />;
    if (user.role === "TUTOR")
      return <TutorMenu refreshSession={refreshSession} />;
    if (user.role === "ADMIN")
      return <AdminMenu refreshSession={refreshSession} />;
  };

  return (
    <section className="relative z-50 bg-black text-white shadow-lg overflow-hidden border-b border-white/10">

      {/* 🌌 Animated Aurora Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-cyan-500/30 blur-3xl rounded-full -top-40 -left-40 animate-pulse" />
        <div className="absolute w-[600px] h-[600px] bg-pink-500/30 blur-3xl rounded-full -bottom-40 -right-40 animate-pulse" />
      </div>

      {/* 🔥 Navbar Container */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative backdrop-blur-2xl bg-gradient-to-r from-black/70 via-zinc-900/70 to-black/70 border-b border-white/10 shadow-[0_0_40px_rgba(0,255,255,0.25)]"
      >

        {/* 💡 Premium LED Running Border */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 animate-led" />
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 animate-led-reverse" />

        <div className="container mx-auto px-6 py-4">

          {/* ================= DESKTOP ================= */}
          <nav className="hidden lg:flex justify-between items-center">

            {/* ✨ Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-extrabold tracking-widest"
            >
              <Link href="/">
                <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,0,255,0.8)]">
                  SkillBridge
                </span>
              </Link>
            </motion.div>

            {/* 🌈 Menu */}
            <NavigationMenu>
              <NavigationMenuList className="flex gap-10">

                {!isLoggedIn &&
                  menu.map((item) => (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.url}
                          className="relative text-white text-lg font-medium group transition duration-300"
                        >
                          {item.title}

                          {/* Neon Hover Effect */}
                          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-pink-500 group-hover:w-full transition-all duration-300 shadow-[0_0_12px_cyan] border-b border-cyan-400" />
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}

                {renderRoleMenu()}
              </NavigationMenuList>
            </NavigationMenu>

            {/* 🔐 Auth Buttons */}
            {!isLoggedIn && (
              <div className="flex gap-5">

                <Button
                  asChild
                  variant="outline"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all shadow-[0_0_15px_cyan] hover:shadow-[0_0_25px_cyan] hover:scale-105 duration-300"
                >
                  <Link href="/login">Login</Link>
                </Button>

                <Button
                  asChild
                  className="relative overflow-hidden text-black font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 shadow-[0_0_35px_rgba(255,0,255,0.8)] hover:scale-110 transition-all duration-300"
                >
                  <Link href="/register">
                    <span className="relative z-10">Sign Up</span>
                    <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition duration-500 blur-xl" />
                  </Link>
                </Button>

              </div>
            )}
          </nav>

          {/* ================= MOBILE ================= */}
          <div className="flex justify-between items-center lg:hidden">

            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              SkillBridge
            </span>

            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="border-cyan-400 shadow-[0_0_10px_cyan]">
                  <Menu />
                </Button>
              </SheetTrigger>

              <SheetContent className="bg-black/95 backdrop-blur-xl text-white border-l border-white/10">

                <div className="flex flex-col gap-6 mt-10">

                  {!isLoggedIn &&
                    menu.map((item) => (
                      <Link
                        key={item.title}
                        href={item.url}
                        className="text-lg hover:text-cyan-400 transition duration-300"
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
      </motion.div>

      {/* 🎬 Keyframes */}
      <style jsx>{`
        @keyframes led {
          0% { background-position: 0% }
          100% { background-position: 200% }
        }
        .animate-led {
          background-size: 200%;
          animation: led 3s linear infinite;
        }
        .animate-led-reverse {
          background-size: 200%;
          animation: led 3s linear infinite reverse;
        }
      `}</style>
    </section>
  );
}