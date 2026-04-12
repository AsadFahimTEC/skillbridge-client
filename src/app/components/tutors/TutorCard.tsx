"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Tutor {
  id: number;
  name: string;
  skill: string;
  rating: number;
  pricePerHour: number;
  image: string;
}

export default function TutorSection() {
  const [tutors, setTutors] = useState<Tutor[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ USE ENV VARIABLE (IMPORTANT FOR DEPLOY)
  const API_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://skillbridge-server-kappa.vercel.app/api";

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        setLoading(true);

        const res = await fetch(`${API_URL}/tutors`, {
          credentials: "include",
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch tutors");
        }

        const data = await res.json();

        // ✅ HANDLE BOTH STRUCTURES
        const tutorsArray = Array.isArray(data)
          ? data
          : Array.isArray(data.data)
          ? data.data
          : [];

        // ✅ MAP SAFE DATA
        const formatted = tutorsArray.map((t: any) => ({
          id: t.id,
          name: t.name || "Unknown",
          skill: t.skill || t.category || "General",
          rating: t.rating || 0,
          pricePerHour: t.pricePerHour || t.hourlyRate || 0,
          image:
            t.image ||
            t.profileImage ||
            "https://i.pravatar.cc/150?img=10",
        }));

        setTutors(formatted);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTutors();
  }, [API_URL]);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-black">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">
          Top Tutors
        </h2>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {/* ✅ Skeleton */}
          {loading &&
            Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl border p-5 animate-pulse bg-background/50"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gray-300"></div>

                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-32 bg-gray-300 rounded"></div>
                    <div className="h-3 w-20 bg-gray-200 rounded"></div>
                  </div>
                </div>

                <div className="mt-4 flex justify-between">
                  <div className="h-4 w-16 bg-gray-300 rounded"></div>
                  <div className="h-4 w-20 bg-gray-300 rounded"></div>
                </div>

                <div className="mt-5 h-10 w-full bg-gray-300 rounded"></div>
              </div>
            ))}

          {/* ✅ REAL DATA */}
          {!loading && tutors.length > 0 &&
            tutors.map((tutor) => (
              <div
                key={tutor.id}
                className="group relative rounded-2xl border bg-background/70 backdrop-blur-xl p-5 overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(99,102,241,0.4)]"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/20 to-pink-500/0 opacity-0 group-hover:opacity-100 blur-xl transition"></div>

                {/* Header */}
                <div className="flex items-center gap-4 relative z-10">
                  <Image
                    src={tutor.image}
                    alt={tutor.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover border-2 border-indigo-500"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{tutor.name}</h3>
                    <Badge className="mt-1 bg-gradient-to-r from-indigo-500 to-pink-500 text-white border-none">
                      {tutor.skill}
                    </Badge>
                  </div>
                </div>

                {/* Rating & Price */}
                <div className="mt-4 flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{tutor.rating}</span>
                  </div>

                  <span className="text-sm font-semibold text-indigo-600">
                    ৳ {tutor.pricePerHour}
                    <span className="text-muted-foreground">/hr</span>
                  </span>
                </div>

                {/* CTA */}
                <Button className="mt-5 w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white border-none hover:opacity-90">
                  View Profile
                </Button>
              </div>
            ))}

          {/* ❌ Empty State */}
          {!loading && tutors.length === 0 && (
            <p className="col-span-full text-center text-gray-500">
              No tutors found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}