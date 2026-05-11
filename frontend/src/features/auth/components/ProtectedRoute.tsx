import { useAuth } from "../context/useAuth";
import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoute() {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/auth/sign-in" replace />;
  }

  return <Outlet />;
}
