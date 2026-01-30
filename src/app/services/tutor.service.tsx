/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetcher } from "./api";

export const getTutors = () => fetcher("/tutors");

export const getTutorDashboard = (id: string) => {
  return fetcher(`/tutors/${id}`);
};

export const updateTutorProfile = (
  data: any) => {
  return fetcher("/tutors/profile", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
