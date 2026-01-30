import { getTutorDashboard } from "@/app/services/tutor.service";

export default async function TutorDashboardPage() {
  const res = await getTutorDashboard();

  return (
    <div className="p-6">
      <h1>Total Sessions: {res.data.totalSessions}</h1>
    </div>
  );
}