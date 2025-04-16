import { Outlet } from "react-router";
import TopNav from "./TopNav/TopNav";
import Footer from "./Footer/Footer";

function Layout() {
  return (
    <>
      <TopNav />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
