import React from "react";
import Hero from "./component/Hero";
import HowItWorks from "./component/HowItWorks";
import WhyOpenNest from "./component/WhyOpenNest";
import OpenNestInAction from "./component/OpenNestInAction";
import CTA from "./component/CTA";
import OurCommunity from "./component/OurCommunity";
import Layout from "../components/layout/Layout";
import SEO from "../components/SEO";

const Home = () => {
  return (
    <Layout>
      <SEO 
        title="OpenNest-Africa - Open Source for Everyone"
        description="Be part of OpenNest-Africa's global community. Whether you're into tech, exploring creative paths, or just curious, there's a place for you in open source."
        keywords={['open source', 'Africa', 'community', 'development', 'design', 'technical writing']}
      />
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
