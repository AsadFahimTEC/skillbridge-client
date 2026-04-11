"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-600/20 to-pink-500/20 blur-3xl animate-pulse"></div>

      {/* LED Glow Orbs */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-ping"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 container mx-auto px-6 py-20"
      >
        {/* Glass Container */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl shadow-indigo-500/20 p-8 md:p-16">

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(99,102,241,0.8)]"
          >
            Privacy Policy
          </motion.h1>

          <div className="space-y-10 text-gray-300 leading-relaxed">

            <PolicySection
              title="1. Information We Collect"
              content="We collect personal information such as your name, email address, and usage data to improve our services and provide a better user experience."
            />

            <PolicySection
              title="2. How We Use Your Information"
              content="Your information is used to provide, maintain, and improve our services, communicate with you, and ensure platform security."
            />

            <PolicySection
              title="3. Data Protection"
              content="We implement appropriate security measures to protect your personal data from unauthorized access, alteration, or disclosure."
            />

            <PolicySection
              title="4. Cookies"
              content="Our website uses cookies to enhance user experience and analyze site traffic. You can disable cookies in your browser settings."
            />

            <PolicySection
              title="5. Third-Party Services"
              content="We may use trusted third-party services for analytics, authentication, or hosting. These providers are obligated to protect your data."
            />

            <PolicySection
              title="6. Changes to This Policy"
              content="We may update this Privacy Policy from time to time. Continued use of our website after changes means you accept the updated policy."
            />

          </div>

        </div>
      </motion.div>
    </div>
  );
}

/* Reusable Section Component */

function PolicySection({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-400/40 transition shadow-lg hover:shadow-indigo-500/30"
    >
      <h2 className="text-xl md:text-2xl font-semibold mb-3 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
        {title}
      </h2>
      <p>{content}</p>

      {/* LED Glow Hover Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-xl opacity-0 hover:opacity-100 transition"></div>
    </motion.div>
  );
}