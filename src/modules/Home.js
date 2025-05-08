import React from "react";
import Hero from "./component/Hero";
import HowItWorks from "./component/HowItWorks";
import WhyOpenNest from "./component/WhyOpenNest";
import OpenNestInAction from "./component/OpenNestInAction";
import CTA from "./component/CTA";
import OurCommunity from "./component/OurCommunity";
import Layout from "../components/layout/Layout";
import BackToTop from "./component/BackToTop";

const Home = () => {
  return (
    <Layout>
      <>
        <Hero />
        <HowItWorks />
        <WhyOpenNest />
        <OpenNestInAction />
        <CTA />
        <OurCommunity />
      
      </>
    </Layout>
  );
};

export default Home;
