"use client";

import { getAdminBookings } from "@/app/services/admin.service";
import { useEffect, useState } from "react";


interface Booking {
  id: string;
  userId: string;
  tutorId: string;
  startTime: string;
  endTime: string;
  status: string;
  createdAt: string;
}

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch bookings on mount
useEffect(() => {
  const fetchBookings = async () => {
    try {
      const data = await getAdminBookings();
      if (Array.isArray(data)) {
        setBookings(data);
      } else {
        setBookings([]);
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  fetchBookings();
}, []);


  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Loading bookings...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  if (bookings.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">No bookings found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">All Bookings</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Booking ID</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">User ID</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Tutor ID</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Start Time</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">End Time</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Status</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Created At</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td className="px-4 py-2 text-sm text-gray-600">{booking.id}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{booking.userId}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{booking.tutorId}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{new Date(booking.startTime).toLocaleString()}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{new Date(booking.endTime).toLocaleString()}</td>
                <td className="px-4 py-2 text-sm font-semibold">
                  {booking.status === "active" ? (
                    <span className="text-green-600">{booking.status}</span>
                  ) : booking.status === "cancelled" ? (
                    <span className="text-red-600">{booking.status}</span>
                  ) : (
                    <span className="text-gray-600">{booking.status}</span>
                  )}
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">{new Date(booking.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
