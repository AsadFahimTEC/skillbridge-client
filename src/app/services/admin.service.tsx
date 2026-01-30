import { fetcher } from "./api";


export const allUsers = () => {
  return fetcher("/admin/users");
}

export const getAdminBookings = () => {
  return fetcher("/admin/bookings");
};

export const getAdminCategories = () => {
  return fetcher("/categories");
};