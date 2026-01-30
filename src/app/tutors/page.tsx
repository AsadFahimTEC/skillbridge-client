import StatsCard from "../components/StatsCard";
import { getTutorDashboard } from "../services/tutor.service";

export default async function TutorCardPage() {
  const res = await getTutorDashboard();
  const data = res.data;
  console.log(data);

  return (
    <div className="p-6 grid gap-4 md:grid-cols-3">
      <StatsCard title="Total Sessions" value={data?.totalSessions}></StatsCard>
      <StatsCard title="Completed" value={data?.completedSessions}></StatsCard>
      <StatsCard title="Upcoming" value={data?.upcomingSessions?.length}></StatsCard>
    </div>
  );
}
