import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <section>
      <Header />
      <main className="max-w-[1190px] px-8 mx-auto box-border">{children}</main>
      <Footer />
    </section>
  );
};

export default Layout;
