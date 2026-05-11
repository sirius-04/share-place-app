import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import { userRoute } from "../features/user/route";
import { placesRoute } from "../features/places/route";
import { authRoute } from "@/features/auth/route";
import PublicOnlyRoute from "@/features/auth/components/PublicOnlyRoute";
import ProtectedRoute from "@/features/auth/components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { Component: PublicOnlyRoute, children: [authRoute] },
      { Component: ProtectedRoute, children: [userRoute, placesRoute] },
    ],
  }
]);
