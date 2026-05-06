import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import { userRoute } from "../features/user/route";
import { placesRoute } from "../features/places/route";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      userRoute,
      placesRoute,
    ],
  }
]);
