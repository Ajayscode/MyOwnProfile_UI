import { Outlet } from "react-router";
import MainNavigation from "../content/MainNavigation";

export default function HomePage() {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}
