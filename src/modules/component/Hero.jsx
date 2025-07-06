import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="text-center text-black py-6 sm:py-8 md:py-10">
      <h1 className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[150px] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight sm:leading-[1.4] md:leading-[1.3] lg:leading-[1.2] xl:leading-[90px] mb-3 sm:mb-4">
        Navigate Open Source Like a Pro with{" "}
        <span className="text-blue">OpenNest</span>
      </h1>
      <p className="px-6 sm:px-12 md:px-20 lg:px-32 xl:px-[220px] leading-relaxed sm:leading-[1.6] md:leading-[1.5] lg:leading-[1.4] xl:leading-[45px] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium">
        Your go-to platform for mastering the open-source space, with
        step-by-step guides and resources to kickstart your journey.
      </p>
      <div className="mt-6 sm:mt-8 md:mt-10 cursor-pointer">
        <Link to="/signup">
          <Button
            text="Get Started Now"
            className="text-white bg-blue text-sm sm:text-base font-semibold py-3 sm:py-4 px-8 sm:px-12 md:px-16 lg:px-24 xl:px-[152px]"
          />
        </Link>
      </div>
      <div className="px-4 sm:px-8 md:px-12 lg:px-16 pt-8 sm:pt-12 md:pt-16 lg:pt-[77px]">
        <img
          src="/images/hero-image.svg"
          alt="Two women working on laptop"
          className="w-full h-auto max-w-6xl mx-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
