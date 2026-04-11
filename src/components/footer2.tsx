"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Logo, LogoImage, LogoText } from "@/components/logo";
import { motion } from "framer-motion";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface Footer2Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  className?: string;
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer2 = ({
  // logo = {
  //   src: "https://i.ibb.co/5gKqm97r/360-F-1562833067-i-MUS3-W5-R1z355geljjd-FWbg-F7g-Qv-Je0l-removebg-preview.png",
  //   alt: "SkillBridge Logo",
  //   title: "SkillBridge 🎓",
  //   url: "/",
  // },
  className,
  tagline = "Connect with Expert Tutors, Learn Anything",
  menuItems = [
    {
      title: "All Tutors",
      links: [
        { text: "Tutors", url: "/tutors" },
        { text: "Profile", url: "/tutors/TutorsPageDynamic" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "Login", url: "/login" },
        { text: "Register", url: "/register" },
      ],
    },
    {
      title: "Social",
      links: [
        { text: "Twitter", url: "#" },
        { text: "Instagram", url: "#" },
        { text: "LinkedIn", url: "#" },
      ],
    },
  ],
  copyright = "© 2026 SkillBridge 🎓 All rights reserved.",
  bottomLinks = [
    { text: "Terms and Conditions", url: "/terms" },
    { text: "Privacy Policy", url: "/privacy" },
  ],
}: Footer2Props) => {
  return (
    <section className={cn("py-16 sm:py-20 bg-black mx-auto text-white", className)}>
      <div className="container">
        <footer>
          {/* Grid layout for responsive design */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-6">
            {/* Logo + Tagline */}
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center gap-3">
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

              </div>

              <p className="mt-4 text-sm font-medium text-muted-foreground">
                {tagline}
              </p>
            </div>

            {/* Menu Sections */}
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 text-base font-bold">{section.title}</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="font-medium">
                      <Link
                        href={link.url}
                        className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent hover:bg-gradient-to-l hover:from-pink-500 hover:to-cyan-400 transition duration-300 hover:shadow-[0_0_10px_cyan] hover:text-transparent hover:drop-shadow-[0_0_20px_rgba(255,0,255,0.6)] hover:underline hover:decoration-pink-500 hover:decoration-2 hover:underline-offset-4 transition-all duration-300"
                      >
                        {link.text}
                      </Link>

                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="mt-14 border-t pt-6 text-sm font-medium text-muted-foreground">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <p>{copyright}</p>
              <ul className="flex flex-wrap gap-4">
                {bottomLinks.map((link, linkIdx) => (
                  <li key={linkIdx} className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent hover:bg-gradient-to-l hover:from-pink-500 hover:to-cyan-400 transition duration-300 hover:shadow-[0_0_10px_cyan] hover:text-transparent hover:drop-shadow-[0_0_20px_rgba(255,0,255,0.6)] hover:underline hover:decoration-pink-500 hover:decoration-2 hover:underline-offset-4 transition-all duration-300">
                    <Link href={link.url}>
                      {link.text}
                    </Link>
                  </li>

                ))}
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer2 };