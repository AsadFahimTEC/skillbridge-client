"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
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
      "Search for a tutor, select your preferred time slot, and confirm securely through our payment system.",
  },
  {
    question: "Can I reschedule or cancel a session?",
    answer:
      "Yes! You can manage your bookings from the dashboard based on our cancellation policy.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "We support cards, secure payment gateways, and modern online banking methods.",
  },
  {
    question: "Are the tutors verified?",
    answer:
      "Yes. Every tutor goes through strict verification before being listed.",
  },
  {
    question: "How do I become a tutor?",
    answer:
      "Apply through the 'Become a Tutor' section and our team will review your profile.",
  },
];

export default function FAQ({
  title = "Frequently Asked Questions",
  description = "Everything you need to know about SkillBridge platform.",
  faqs = DEFAULT_FAQS,
  className,
}: FAQProps) {
  // 🔥 All answers hidden by default
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    // If same clicked → close it
    // If different clicked → open new one
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className={cn(
        "relative py-20 bg-black text-white overflow-hidden",
        className
      )}
    >
      <div className="container mx-auto px-4 max-w-4xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="mt-4 text-gray-400 text-lg">{description}</p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="relative group rounded-xl p-[1px]">

                {/* LED Border Glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 blur-lg transition duration-300" />

                {/* Card */}
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">

                  {/* Question Button */}
                  <button
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between text-left"
                  >
                    <span className="font-semibold text-lg">
                      {faq.question}
                    </span>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="text-cyan-400" />
                    </motion.div>
                  </button>

                  {/* Animated Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}