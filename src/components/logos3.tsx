"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { motion } from "framer-motion";

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
  className?: string;
}

export default function LogosUltra({
  heading = "Trusted by Top Companies",
  logos = [
    {
      id: "logo-1",
      description: "Astro",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg",
    },
    {
      id: "logo-2",
      description: "Figma",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-wordmark.svg",
    },
    {
      id: "logo-3",
      description: "Next.js",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-wordmark.svg",
    },
    {
      id: "logo-4",
      description: "React",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-wordmark.svg",
    },
    {
      id: "logo-5",
      description: "Shadcn UI",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark.svg",
    },
    {
      id: "logo-6",
      description: "Supabase",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark.svg",
    },
    {
      id: "logo-7",
      description: "Tailwind",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark.svg",
    },
    {
      id: "logo-8",
      description: "Vercel",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark.svg",
    },
  ],
  className,
}: {
  heading?: string;
  logos?: Logo[];
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative py-24 bg-black text-white overflow-hidden",
        className
      )}
    >
      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 blur-3xl rounded-full top-[-100px] left-[-100px] animate-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px] animate-pulse" />
      </div>

      {/* 🔥 HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          {heading}
        </h2>
      </motion.div>

      {/* 🚀 CAROUSEL */}
      <div className="relative max-w-6xl mx-auto">
        <Carousel
          opts={{ loop: true }}
          plugins={[
            AutoScroll({
              playOnInit: true,
              speed: 1.5,
            }),
          ]}
        >
          <CarouselContent className="ml-0">
            {logos.map((logo, index) => (
              <CarouselItem
                key={logo.id}
                className="flex basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 justify-center"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.15 }}
                  className="relative group p-[2px] rounded-xl"
                >
                  {/* 💡 LED BORDER */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-100 transition" />

                  {/* ✨ CARD */}
                  <div className="relative bg-white/5 backdrop-blur-xl rounded-xl px-6 py-4 border border-white/10 flex items-center justify-center shadow-md">

                    {/* LOGO */}
                    <img
                      src={logo.image}
                      alt={logo.description}
                      className="h-6 w-auto opacity-70 group-hover:opacity-100 transition duration-300 filter grayscale group-hover:grayscale-0"
                    />

                    {/* ✨ SHINE */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/10 blur-xl rounded-xl transition" />
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* 🌫️ SIDE FADE */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent"></div>
      </div>
    </section>
  );
}