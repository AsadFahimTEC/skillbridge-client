/* eslint-disable @typescript-eslint/no-explicit-any */
import TutorCard from "../components/TutorCard";
import { getTutorDashboard, getTutors } from "../services/tutor.service";


export default async function TutorsPage() {
  const res = await getTutors();
  const tutors = res.data;

  return (
    <div className="p-6 grid gap-6 md:grid-cols-3">
      {res.data.map((tutor: any) => (
        <TutorCard key={tutor.id} tutor={tutor} />
      ))}
    </div>
  );
}
