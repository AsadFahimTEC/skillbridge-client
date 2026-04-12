import { UserRole } from "@/constants/roles";
import { useSession } from "./useSession";

export const useRole = () => {
  const { user, loading } = useSession();

  return {
    loading,
    isStudent: user?.role === UserRole.User,
    isAdmin: user?.role === UserRole.Admin,
    isManager: user?.role === UserRole.Manager,
    isVendor: user?.role === UserRole.Vendor,
    isOrganizer: user?.role === UserRole.Organizer,
  };
};
