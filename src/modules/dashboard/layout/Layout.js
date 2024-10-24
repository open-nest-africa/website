import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="h-screen w-full flex overflow-hidden">
      <div>
        {" "}
        <Sidebar />
      </div>
      <div className="flex-1">
        <Header />
        <div className="py-8 pl-9 pr-[100px] bg-[#F0F2F5] h-full overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
