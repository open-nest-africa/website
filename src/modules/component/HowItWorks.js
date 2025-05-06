import React from "react";
import { Card } from "../../components/Card";

const HowItWorks = () => {
  return (
    <section className="py-16 px-[103px]">
      <h1 className="text-black text-[64px] leading-[92.8px] font-semibold text-center">
        How it Works
      </h1>
      <div className="flex justify-center gap-x-6 pt-10">
        <aside className="w-1/2 space-y-6">
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
        <aside className="w-1/2">
          <img src="/images/how-it-works-image.svg" alt="Woman smiling" />
        </aside>
      </div>
    </section>
  );
};

export default HowItWorks;
