import { getTutorDashboard } from "@/app/services/tutor.service";


export default async function TutorDashboardPage({
  params,
}: {
  params: { id: string };
}) {
  const res = await getTutorDashboard(params.id);

  return (
    <div className="p-6">
      <h1>Total Sessions: {res.data.totalSessions}</h1>
    </div>
  );
}