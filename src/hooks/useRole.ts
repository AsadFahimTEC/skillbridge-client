import { UserRole } from "@/constants/roles";
import { useSession } from "./useSession";

export const useRole = () => {
    const user = useSession();

    return {
        isStudent: user?.role === UserRole.STUDENT,
        isTutor: user?.role === UserRole.TUTOR,
        isADMIN: user?.role === UserRole.ADMIN,
    };
};