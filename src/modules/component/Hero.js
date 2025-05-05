import React from "react";
import Button from "../../components/Button";

const Hero = () => {
  return (
    <section className="text-center text-black py-10">
      <h1 className="px-[150px] font-semibold text-6xl leading-[90px] mb-4">
        Navigate Open Source Like a Pro with{" "}
        <span className="text-blue">OpenNest</span>
      </h1>
      <p className="px-[220px] leading-[45px] text-3xl font-medium">
        Your go-to platform for mastering the open-source space, with
        step-by-step guides and resources to kickstart your journey.
      </p>
      <div className="mt-10 cursor-pointer">
        <Button
          text="Get Started Now"
          className="text-white bg-blue text-base font-semibold py-4 px-[152px]"
        />
      </div>
      <div className="px-16 pt-[77px]">
        <img src="/images/hero-image.svg" alt="Two womens working on laptop" />
      </div>
    </section>
  );
};

export default Hero;
