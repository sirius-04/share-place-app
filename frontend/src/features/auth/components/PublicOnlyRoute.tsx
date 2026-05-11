import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/features/auth/context/useAuth";

export default function PublicOnlyRoute() {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
