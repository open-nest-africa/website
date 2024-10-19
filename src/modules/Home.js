import React from "react";
import Header from "../components/layout/Header";
import Hero from "./component/Hero";
import HowItWorks from "./component/HowItWorks";
import WhyOpenNest from "./component/WhyOpenNest";
import OpenNestInAction from "./component/OpenNestInAction";
import CTA from "./component/CTA";
import OurCommunity from "./component/OurCommunity";

const Home = () => {
  return (
    <section>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WhyOpenNest />
        <OpenNestInAction />
        <CTA />
        <OurCommunity />
      </main>
    </section>
  );
};

export default Home;
