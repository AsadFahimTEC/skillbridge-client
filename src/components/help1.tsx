"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// ------------------ MOCK AI RESPONSE ------------------
const getAIResponse = (message: string) => {
  const msg = message.toLowerCase();

  if (msg.includes("book")) {
    return "You can book a tutor by visiting the Tutors page and selecting your preferred schedule.";
  }
  if (msg.includes("payment")) {
    return "We support secure online payments including cards and mobile banking.";
  }
  if (msg.includes("refund")) {
    return "Refunds depend on cancellation timing. Please check our refund policy.";
  }

  return "I'm here to help! Please provide more details so I can assist you better 😊";
};

export default function AIHelpCenter() {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hi 👋 I'm your AI assistant. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  // Auto scroll
  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      const aiResponse = {
        role: "ai",
        text: getAIResponse(input),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="relative min-h-screen bg-black text-white flex flex-col overflow-hidden">

      {/* 🌌 Aurora Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-cyan-500/20 blur-3xl rounded-full top-[-200px] left-[-200px] animate-pulse" />
        <div className="absolute w-[600px] h-[600px] bg-purple-500/20 blur-3xl rounded-full bottom-[-200px] right-[-200px] animate-pulse" />
      </div>

      {/* 🔥 LED Top Border */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 animate-[move_4s_linear_infinite]" />

      {/* HEADER */}
      <div className="text-center py-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,0,255,0.7)]"
        >
          AI Help Center 🤖
        </motion.h1>
        <p className="text-gray-400 mt-3">
          Smart. Fast. Beautiful AI Support.
        </p>
      </div>

      {/* CHAT AREA */}
      <div
        ref={chatRef}
        className="flex-1 overflow-y-auto px-4 max-w-3xl mx-auto w-full space-y-6 pb-28"
      >
        <AnimatePresence>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex items-start gap-3 max-w-[85%] p-4 rounded-2xl backdrop-blur-xl shadow-lg ${
                  msg.role === "user"
                    ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-black shadow-[0_0_20px_cyan]"
                    : "bg-white/5 border border-white/10"
                }`}
              >
                {msg.role === "ai" ? (
                  <Bot className="text-cyan-400 mt-1" />
                ) : (
                  <User className="text-black mt-1" />
                )}

                <p className="text-sm md:text-base">{msg.text}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing Indicator */}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 text-gray-400"
          >
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" />
              <span className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-150" />
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-300" />
            </div>
            AI is typing...
          </motion.div>
        )}
      </div>

      {/* INPUT */}
      <div className="fixed bottom-0 left-0 w-full bg-black/70 backdrop-blur-2xl border-t border-white/10 p-4">
        <div className="max-w-3xl mx-auto flex gap-3">

          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-cyan-400"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
          />

          <Button
            onClick={sendMessage}
            className="relative overflow-hidden bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 text-black font-bold shadow-[0_0_25px_rgba(255,0,255,0.7)] hover:scale-105 transition"
          >
            <Send size={18} />
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes move {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}