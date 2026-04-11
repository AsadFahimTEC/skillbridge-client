"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-600/20 to-pink-500/20 blur-3xl animate-pulse"></div>

      {/* Floating LED Glow Circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-ping"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 container mx-auto px-6 py-20"
      >
        {/* Glass Container */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl shadow-cyan-500/20 p-8 md:p-16">

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-10 text-center bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,255,255,0.6)]"
          >
            Terms & Conditions
          </motion.h1>

          {/* Sections */}
          <div className="space-y-10 text-gray-300 leading-relaxed">

            <Section
              title="1. Introduction"
              content="Welcome to our platform. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions."
            />

            <Section
              title="2. Use of Services"
              content="You agree to use our services responsibly and not engage in any activity that disrupts or harms the platform or other users."
            />

            <Section
              title="3. User Accounts"
              content="You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account."
            />

            <Section
              title="4. Privacy Policy"
              content="Your privacy is important to us. Please review our Privacy Policy to understand how we collect and use your data."
            />

            <Section
              title="5. Termination"
              content="We reserve the right to suspend or terminate your access to our services at any time if you violate these terms."
            />

            <Section
              title="6. Changes to Terms"
              content="We may update these Terms and Conditions from time to time. Continued use of the website means you accept the updated terms."
            />

          </div>

        </div>
      </motion.div>
    </div>
  );
}

/* Reusable Section Component */

function Section({ title, content }: { title: string; content: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition shadow-lg hover:shadow-cyan-500/20"
    >
      <h2 className="text-xl md:text-2xl font-semibold mb-3 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
        {title}
      </h2>
      <p>{content}</p>

      {/* LED Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-xl opacity-0 hover:opacity-100 transition"></div>
    </motion.div>
  );
}