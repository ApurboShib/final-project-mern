import { Outlet } from "react-router";
import Navbar from "../pages/shared/Navbar/Navbar.jsx";
import Footer from "../pages/shared/footer/Footer.jsx";

const RootLayouts = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayouts;
