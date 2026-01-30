import TutorCard from "../components/TutorCard";
import { getTutorDashboard } from "../services/tutor.service";


export default async function TutorsPage() {
  const res = await getTutorDashboard();
  const tutors = res.data;

  return (
    <div className="p-6 grid gap-6 md:grid-cols-3">
      {tutors?.map((tutor: any) => (
        <TutorCard key={tutor.id} tutor={tutor} />
      ))}
    </div>
  );
}
