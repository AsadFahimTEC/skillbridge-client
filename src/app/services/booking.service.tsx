/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetcher } from "./api";


export const createBooking = (data: any) => {
  return fetcher("/bookings", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export const getStudentBookings = () => {
  return fetcher("/bookings");
};