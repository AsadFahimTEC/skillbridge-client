/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */
import { getStudentBookings } from "../services/booking.service";

export default async function StudentDashboardPage() {
  const res = await getStudentBookings();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">My Bookings</h1>

      {
        res.data.map((b: any) => (
          <div key={b.id}>{b.status}</div>
        ))}
    </div>
  );
}
