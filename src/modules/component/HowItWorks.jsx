import React from "react";
import { Card } from "../../components/Card";

const HowItWorks = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[103px]">
      <h1 className="text-black dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] leading-tight sm:leading-[1.4] md:leading-[1.3] lg:leading-[1.2] xl:leading-[92.8px] font-semibold text-center">
        How it Works
      </h1>
      <div className="flex flex-col lg:flex-row justify-center gap-6 lg:gap-x-6 pt-6 sm:pt-8 md:pt-10">
        <aside className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
          <Card
            title="Learn the Basics"
            paragraph="Understand open source fundamentals with beginner-friendly tutorials."
            image="money-icon.svg"
            bgColor="bg-[#F9FAFB]"
            titleTextColour="text-dark-2"
            paragraphTextColour="text-[#344054]"
          />
          <Card
            title="Find your first Project"
            paragraph="We help you discover projects that match your skill level and interests."
            image="truck-icon.svg"
            bgColor="bg-[#F9FAFB]"
            titleTextColour="text-dark-2"
            paragraphTextColour="text-[#344054]"
          />
          <Card
            title="Contribute like a PRO"
            paragraph="Gain hands-on experience by contributing to real-world projects."
            image="chart-up-icon.svg"
            bgColor="bg-[#F9FAFB]"
            titleTextColour="text-dark-2"
            paragraphTextColour="text-[#344054]"
          />
          <Card
            title="Grow with the Community"
            paragraph="Join a supportive community of open-source contributors."
            image="money-icon.svg"
            bgColor="bg-blue"
            titleTextColour="text-white"
            paragraphTextColour="text-[#F0F2F5]"
          />
        </aside>
        <aside className="w-full lg:w-1/2 mt-6 lg:mt-0">
          <img src="/images/how-it-works-image.svg" alt="Woman smiling" className="w-full h-auto max-w-md lg:max-w-full mx-auto" />
        </aside>
      </div>
    </section>
  );
};

export default HowItWorks;