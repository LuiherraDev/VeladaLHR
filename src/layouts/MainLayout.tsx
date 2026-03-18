import { Outlet } from "react-router";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import Animation from "../components/shared/Animation";

export const MainLayout = () => (
  <div className="min-h-screen">
    <Animation />
    <Header />
    <Outlet />
    <Footer />
  </div>
)

