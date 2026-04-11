"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  description?: string;
  faqs?: FAQItem[];
  className?: string;
}

const DEFAULT_FAQS: FAQItem[] = [
  {
    question: "How do I book a tutor session?",
    answer:
      "Search for a tutor, choose a time slot, and confirm your booking with secure payment.",
  },
  {
    question: "Can I reschedule or cancel a session?",
    answer:
      "Yes! You can manage sessions from your dashboard based on our policy.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "We support cards and modern secure online payment gateways.",
  },
  {
    question: "Are the tutors verified?",
    answer:
      "Yes, all tutors go through strict verification before being listed.",
  },
  {
    question: "How do I become a tutor?",
    answer:
      "Apply via 'Become a Tutor' section. Our team will review your profile.",
  },
];

export default function FAQ({
  title = "Frequently Asked Questions",
  description = "Everything you need to know about SkillBridge platform.",
  faqs = DEFAULT_FAQS,
  className,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className={cn(
        "relative py-20 bg-black text-white overflow-hidden",
        className
      )}
    >
      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full top-[-100px] left-[-100px] animate-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px] animate-pulse" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        {/* 🔥 HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="mt-4 text-gray-400 text-lg">{description}</p>
        </motion.div>

        {/* FAQ ITEMS */}
        <div className="space-y-6">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="relative group rounded-xl p-[1px]"
              >
                {/* 💡 LED BORDER */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>

                {/* ✨ CARD */}
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-5">
                  {/* QUESTION */}
                  <button
                    onClick={() => toggle(idx)}
                    className="flex w-full items-center justify-between text-left"
                  >
                    <span className="font-semibold text-lg">
                      {faq.question}
                    </span>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isOpen ? (
                        <ChevronUp className="text-cyan-400" />
                      ) : (
                        <ChevronDown className="text-cyan-400" />
                      )}
                    </motion.div>
                  </button>

                  {/* ANSWER */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <p className="mt-4 text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* ✨ HOVER GLOW */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-white/5 blur-xl transition"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}