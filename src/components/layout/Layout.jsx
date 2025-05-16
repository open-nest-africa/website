import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "../../modules/component/BackToTop";

const Layout = ({ children }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 2000);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      <Header />
      <main>{children}</main>
      {show && <BackToTop />}
      <Footer />
    </section>
  );
};

export default Layout;
