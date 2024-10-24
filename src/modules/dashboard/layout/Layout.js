import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="h-full w-full flex">
      <div>
        {" "}
        <Sidebar />
      </div>
      <div className="flex-1">
        <Header />
        <div className="pt-8 pl-9 pr-[100px] bg-[#F0F2F5]">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
