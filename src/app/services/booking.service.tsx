import { fetcher } from "./api";


export const getStudentDashboard = () => {
  return fetcher("/dashboard");
}

export const getStudentBookings = () => {
  return fetcher("/dashboard/bookings");
};