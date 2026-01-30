/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetcher } from "@/app/services/api";

export default async function AdminUsersPage() {
  const res = await fetcher("/admin/users");

  return (
    <div className="p-6">
      {
        res.data.map((u: any) => (
          <div key={u.id}>
            {u.name} - {u.role}
          </div>
        ))}
    </div>
  );
}