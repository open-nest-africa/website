import React from "react";
import Hero from "./component/Hero";
import HowItWorks from "./component/HowItWorks";
import WhyOpenNest from "./component/WhyOpenNest";
import OpenNestInAction from "./component/OpenNestInAction";
import CTA from "./component/CTA";
import OurCommunity from "./component/OurCommunity";
import BecomeASponsor from "./component/BecomeASponsor";
import Layout from "../components/layout/Layout";

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
        <BecomeASponsor />

      </>
    </Layout>
  );
};

export default Home;
