import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Discount from "./components/Discount/Discount";
import Footer from "./components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Discount />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
