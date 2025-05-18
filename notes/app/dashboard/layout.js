import React from "react";
import SideBar from "./_components/SideBar";
import Header from "./_components/Header";

function DashboardLayout({ children }) {
  return (
    <div>
      <div className=" fixed h-screen md:w-64">
        <SideBar />
      </div>
      <div className="md:ml-64">
        <Header />
        <div className="p-10">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
