import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { SiteFooter } from "./SiteFooter";
import { ScrollManager } from "./ScrollManager";

export function Layout() {
  return (
    <div className="page">
      <ScrollManager />
      <Navbar />
      <Outlet />
      <SiteFooter />
    </div>
  );
}
