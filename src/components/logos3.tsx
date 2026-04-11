"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
}

export default function LogosUltraPremium({
  heading = "Trusted by Top Companies",
  logos = [
    {
      id: "logo-1",
      description: "Astro",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg",
    },
    {
      id: "logo-2",
      description: "Figma",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-wordmark.svg",
    },
    {
      id: "logo-3",
      description: "Next.js",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-wordmark.svg",
    },
    {
      id: "logo-4",
      description: "React",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-wordmark.svg",
    },
    {
      id: "logo-5",
      description: "Shadcn UI",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark.svg",
    },
    {
      id: "logo-6",
      description: "Supabase",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark.svg",
    },
    {
      id: "logo-7",
      description: "Tailwind",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark.svg",
    },
    {
      id: "logo-8",
      description: "Vercel",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark.svg",
    },
  ],
  className,
}: {
  heading?: string;
  logos?: Logo[];
  className?: string;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      className={cn(
        "relative py-28 bg-black text-white overflow-hidden",
        className
      )}
    >
      {/* 🌌 Animated Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full top-[-150px] left-[-150px] animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full bottom-[-150px] right-[-150px] animate-pulse" />
        <div className="absolute w-[300px] h-[300px] bg-pink-500/20 blur-3xl rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      </div>

      {/* 🔥 HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="relative inline-block text-4xl md:text-6xl font-extrabold">
          <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient bg-[length:300%_300%]">
            {heading}
          </span>

          {/* LED Glow Underline */}
          <div className="absolute left-0 bottom-[-10px] w-full h-[3px] bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 blur-md opacity-70 animate-pulse" />
        </h2>
      </motion.div>

      {/* 🚀 LOGO CAROUSEL */}
      <div className="relative max-w-7xl mx-auto">
        <Carousel
          opts={{ loop: true }}
          plugins={[
            AutoScroll({
              playOnInit: true,
              speed: 1.2,
              stopOnInteraction: false,
            }),
          ]}
        >
          <CarouselContent className="ml-0">
            {logos.map((logo, index) => (
              <CarouselItem
                key={logo.id}
                className="flex basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 justify-center"
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ scale: 1.15, rotate: 1 }}
                  className="relative group p-[2px] rounded-2xl"
                >
                  {/* 🔥 Animated LED Border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 blur-xl transition duration-500 animate-gradient bg-[length:300%_300%]" />

                  {/* 💎 Glass Card */}
                  <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl px-8 py-6 border border-white/10 shadow-lg flex items-center justify-center overflow-hidden">
                    
                    {/* Shine Effect */}
                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rotate-45 blur-2xl opacity-0 group-hover:opacity-100 transition duration-700" />

                    <img
                      src={logo.image}
                      alt={logo.description}
                      className="h-8 w-auto opacity-70 group-hover:opacity-100 transition duration-300 filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* 🌫️ Side Gradient Fade */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent pointer-events-none" />
      </div>

      {/* ✨ Extra CSS for Animated Gradient */}
      <style jsx>{`
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradientMove 6s ease infinite;
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}