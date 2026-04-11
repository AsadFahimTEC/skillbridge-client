"use client";

import {
  GraduationCap,
  Code,
  Palette,
  BarChart,
  Languages,
  UserCheck,
} from "lucide-react";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FeaturedItem {
  heading: string;
  description: string;
  icon: React.ReactNode;
}

export default function FeaturedTutorsUltra({ className }: { className?: string }) {
  const items: FeaturedItem[] = [
    {
      heading: "Web Development",
      description:
        "Master modern web technologies like React, Next.js, Node.js, and full-stack development.",
      icon: <Code className="w-6 h-6" />,
    },
    {
      heading: "UI / UX Design",
      description:
        "Learn user-centered design, Figma, and modern UI systems.",
      icon: <Palette className="w-6 h-6" />,
    },
    {
      heading: "Data & Analytics",
      description:
        "Learn SQL, Power BI, and data-driven decision making.",
      icon: <BarChart className="w-6 h-6" />,
    },
    {
      heading: "Language Learning",
      description:
        "Improve communication skills with expert tutors.",
      icon: <Languages className="w-6 h-6" />,
    },
    {
      heading: "Career Mentorship",
      description:
        "Get 1-on-1 mentorship for interviews and career growth.",
      icon: <UserCheck className="w-6 h-6" />,
    },
    {
      heading: "Academic Subjects",
      description:
        "Math, science, and academic support for all levels.",
      icon: <GraduationCap className="w-6 h-6" />,
    },
  ];

  return (
    <section
      className={cn(
        "relative py-24 overflow-hidden bg-black text-white",
        className
      )}
    >
      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full top-[-150px] left-[-150px] animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-3xl rounded-full bottom-[-150px] right-[-150px] animate-pulse" />
      </div>

      <div className="container mx-auto px-4">
        {/* 🔥 HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 text-black font-semibold shadow-[0_0_15px_rgba(0,255,255,0.7)]">
            Featured
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Featured Tutors & Skills
          </h2>

          <p className="text-gray-400 text-lg">
            Learn from top-rated tutors across the most in-demand skills.
          </p>
        </motion.div>

        {/* 🔥 GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative p-[1px] rounded-2xl group"
            >
              {/* 💡 LED BORDER */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 blur-md transition" />

              {/* ✨ CARD */}
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 h-full border border-white/10 shadow-lg">

                {/* ICON */}
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 text-black shadow-[0_0_15px_rgba(255,0,255,0.6)]">
                  {item.icon}
                </div>

                {/* CONTENT */}
                <h3 className="text-xl font-bold mb-2">{item.heading}</h3>
                <p className="text-white text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🚀 CTA BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <Link href="/tutors">
            <button className="relative px-8 py-4 font-bold text-black rounded-full bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 shadow-[0_0_25px_rgba(255,0,255,0.8)] hover:scale-105 transition">

              Explore All Tutors

              {/* ✨ SHINE EFFECT */}
              <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition blur-xl rounded-full" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}