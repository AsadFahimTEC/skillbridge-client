"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function UltraLandingPage() {
  return (
    <main className="relative overflow-hidden bg-black text-white">

      {/* 🌌 Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full top-[-100px] left-[-100px] animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px] animate-pulse" />
      </div>

      {/* ================================================= */}
      {/* 1️⃣ Attractive Intro Section (Replaced Hero) */}
      {/* ================================================= */}
      <section className="py-24 px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,0,255,0.7)]">
            Connect. Learn. Grow.
          </h1>

          <p className="mt-6 text-gray-300 text-lg md:text-xl">
            A modern platform where students, tutors & admins collaborate
            seamlessly with futuristic UI & powerful features.
          </p>

          <div className="mt-8 flex justify-center gap-6 flex-wrap">
            <Button className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 text-black font-bold shadow-[0_0_25px_rgba(255,0,255,0.6)] hover:scale-105 transition">
              Get Started
            </Button>
            <Button
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition shadow-[0_0_15px_cyan]"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </section>

      {/* ================================================= */}
      {/* 2️⃣ Features Section */}
      {/* ================================================= */}
      <section className="py-20 px-6 border-t border-white/10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Powerful Features
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {["Smart Matching", "Secure Payments", "Real-time Chat"].map(
            (item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:scale-105 transition"
              >
                <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                  {item}
                </h3>
                <p className="text-gray-400">
                  Experience next-generation tools designed for performance,
                  security and seamless collaboration.
                </p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* ================================================= */}
      {/* 3️⃣ How It Works */}
      {/* ================================================= */}
      <section className="py-20 px-6 border-t border-white/10 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          How It Works
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {["Create Account", "Choose Your Role", "Start Learning"].map(
            (step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                className="p-8 rounded-xl bg-gradient-to-br from-cyan-500/10 to-pink-500/10 border border-white/10 shadow-[0_0_25px_rgba(255,0,255,0.3)]"
              >
                <h3 className="text-xl font-bold mb-4">{step}</h3>
                <p className="text-gray-400">
                  Simple and intuitive steps to begin your journey instantly.
                </p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* ================================================= */}
      {/* 4️⃣ Statistics Section */}
      {/* ================================================= */}
      <section className="py-20 px-6 border-t border-white/10 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Platform Growth
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { value: "10K+", label: "Active Users" },
            { value: "500+", label: "Expert Tutors" },
            { value: "1K+", label: "Events Hosted" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-10 rounded-2xl bg-white/5 border border-white/10 shadow-[0_0_20px_rgba(0,255,255,0.3)]"
            >
              <h3 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                {stat.value}
              </h3>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================================================= */}
      {/* 5️⃣ CTA Section */}
      {/* ================================================= */}
      <section className="py-24 px-6 border-t border-white/10 text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,0,255,0.7)]">
            Ready to Join SkillBridge?
          </h2>

          <p className="mt-6 text-gray-400 text-lg">
            Start your journey today and unlock unlimited possibilities.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <Button className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 text-black font-bold px-10 py-6 shadow-[0_0_30px_rgba(255,0,255,0.7)] hover:scale-110 transition">
                Join Now
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}