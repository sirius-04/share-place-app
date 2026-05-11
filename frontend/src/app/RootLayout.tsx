import { Outlet } from "react-router-dom"
import MainNavigation from "../shared/components/navigation/MainNavigation";

export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main className="my-[5rem] mx-5">
        <Outlet />
      </main>
    </>
  );
}
