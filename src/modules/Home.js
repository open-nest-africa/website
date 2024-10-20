import React from "react";
import Header from "../components/layout/Header";
import Hero from "./component/Hero";
import HowItWorks from "./component/HowItWorks";
import WhyOpenNest from "./component/WhyOpenNest";
import OpenNestInAction from "./component/OpenNestInAction";
import CTA from "./component/CTA";
import OurCommunity from "./component/OurCommunity";
import Footer from "../components/layout/Footer";
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
      </>
    </Layout>
  );
};

export default Home;
