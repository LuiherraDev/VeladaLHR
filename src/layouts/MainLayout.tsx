import { Outlet } from "react-router";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

export const MainLayout = () => (
  <div className="min-h-screen">
    <Header />
    <Outlet />
    <Footer />
  </div>
)

