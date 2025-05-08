import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "../../modules/component/BackToTop";

const Layout = ({ children }) => {
  return (
    <section>
      <Header />
      <main>{children}</main>
      <BackToTop/>
      <Footer />
    </section>
  );
};

export default Layout;
