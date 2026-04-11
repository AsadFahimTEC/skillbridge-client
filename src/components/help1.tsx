"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Bot, User, Sparkles } from "lucide-react";

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

// ------------------ COMPONENT ------------------
export default function AIHelpCenter() {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hi 👋 I'm your AI assistant. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

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
    }, 800);
  };

  return (
    <section className="min-h-screen bg-black text-white flex flex-col">

      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />
      </div>

      {/* HEADER */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          AI Help Center 🤖
        </h1>
        <p className="text-gray-400 mt-2">
          Ask anything. Get instant AI answers.
        </p>
      </div>

      {/* CHAT AREA */}
      <div className="flex-1 overflow-y-auto px-4 max-w-3xl mx-auto w-full space-y-4 pb-24">

        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`flex items-start gap-3 max-w-[80%] p-4 rounded-xl backdrop-blur-xl ${
                msg.role === "user"
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-black"
                  : "bg-white/5 border border-white/10"
              }`}
            >
              {msg.role === "ai" ? (
                <Bot className="text-cyan-400 mt-1" />
              ) : (
                <User className="text-black mt-1" />
              )}

              <p className="text-sm">{msg.text}</p>
            </div>
          </motion.div>
        ))}

        {/* Typing Indicator */}
        {loading && (
          <div className="flex gap-2 items-center text-gray-400">
            <Sparkles className="animate-pulse" />
            AI is typing...
          </div>
        )}
      </div>

      {/* INPUT */}
      <div className="fixed bottom-0 left-0 w-full bg-black/80 backdrop-blur-xl border-t border-white/10 p-4">
        <div className="max-w-3xl mx-auto flex gap-2">

          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything..."
            className="bg-white/5 border border-white/10 text-white"
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />

          <Button
            onClick={sendMessage}
            className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black"
          >
            <Send size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}