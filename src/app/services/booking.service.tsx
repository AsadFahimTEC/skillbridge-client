/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetcher } from "./api";

export const createBooking = async (data: any) => {
  const res = await fetcher("/bookings", {
    method: "POST",
    body: JSON.stringify(data),
  });
  return res.data;
};

export const getStudentBookings = async () => {
  const res = await fetcher("/bookings");
  return res.data; // ✅ return array only
};
