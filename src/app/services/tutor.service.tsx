import { fetcher } from "./api";

export const getTutorDashboard = () => {
  return fetcher("/tutors");
}

export const updateTutorProfile = (data: string ) => {
  return fetcher("/tutors/profile", {
    body: JSON.stringify(data),
  });
};