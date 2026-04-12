"use client";

import { useEffect, useState } from "react";
import {
  cancelBooking,
  getStudentBookings,
} from "@/app/services/booking.service";
import { Button } from "@/components/ui/button";

interface Booking {
  id: string;
  studentId?: string;
  tutorId: string;
  startTime: string;
  endTime: string;
  status: string;
}

export default function TutorBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ Load Bookings
  const loadBookings = async () => {
    try {
      setLoading(true);
      const data = await getStudentBookings();

      setBookings(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error(error);
      setBookings([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBookings();
  }, []);

  // ✅ Cancel Booking
  const handleCancel = async (bookingId: string) => {
    const confirm = window.confirm(
      "Are you sure you want to cancel this session?"
    );
    if (!confirm) return;

    try {
      await cancelBooking(bookingId);
      await loadBookings(); // refresh UI
    } catch (error) {
      console.error(error);
      alert("Failed to cancel booking");
    }
  };

  return (
    <div className="container mx-auto p-6">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
        My Bookings (Tutor)
      </h1>

      {/* ✅ Skeleton Loading */}
      {loading && (
        <div className="grid gap-4 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="border rounded-xl p-4 animate-pulse bg-background/50"
            >
              <div className="h-4 w-32 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 w-40 bg-gray-200 rounded mb-2"></div>

              <div className="h-4 w-20 bg-gray-300 rounded mt-4"></div>

              <div className="mt-4 h-10 w-full bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      )}

      {/* ❌ Empty State */}
      {!loading && bookings.length === 0 && (
        <p className="text-gray-500 text-center">No bookings found</p>
      )}

      {/* ✅ Real Data */}
      {!loading && bookings.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="relative rounded-2xl border bg-background/70 backdrop-blur-xl p-5 shadow-md transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:scale-[1.02]"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/20 to-pink-500/0 opacity-0 hover:opacity-100 blur-xl transition"></div>

              {/* Content */}
              <div className="relative z-10">
                <p className="text-sm">
                  <strong>Start:</strong>{" "}
                  {new Date(booking.startTime).toLocaleString()}
                </p>

                <p className="text-sm">
                  <strong>End:</strong>{" "}
                  {new Date(booking.endTime).toLocaleString()}
                </p>

                <p
                  className={`mt-3 font-semibold ${
                    booking.status === "cancelled"
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  Status: {booking.status}
                </p>

                {/* Action */}
                {booking.status !== "cancelled" && (
                  <Button
                    variant="destructive"
                    className="mt-4 w-full"
                    onClick={() => handleCancel(booking.id)}
                  >
                    Cancel Session
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}