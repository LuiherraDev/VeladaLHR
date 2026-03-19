import { Outlet } from "react-router";
import Footer from "../components/shared/Footer";
import Animation from "../components/shared/Animation";

export const MainLayout = () => (
  <div className="min-h-screen">
    <Animation />
    <Outlet />
    <Footer />
  </div>
)

