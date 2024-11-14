import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  console.log("hllo");
  return (
    <>

      <div className=" h-screen bg-customBlue    text-white pt-8 ">
      <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
