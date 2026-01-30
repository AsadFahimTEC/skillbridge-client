import { fetcher } from "./api";

export interface UpdateTutorProfilePayload {
  bio: string;
  pricePerHr: number;
  categoryIds: string[];
}

export const getTutorDashboard = () => {
  return fetcher("/tutors");
};

export const updateTutorProfile = (
  data: UpdateTutorProfilePayload
) => {
  return fetcher("/tutors/profile", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
