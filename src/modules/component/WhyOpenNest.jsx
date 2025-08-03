import React from "react";
import WhyOpenNestCard from "../../components/WhyOpenNestCard";

const WhyOpenNest = () => {
  return (
    <section className="px-4 text-black dark:text-white sm:px-6 md:px-10 lg:px-16 xl:px-[100px] py-10 sm:py-12 md:py-14">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight lg:leading-[92.8px] font-semibold text-center">
        Why Choose OpenNest
      </h1>
      <main className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 md:gap-x-[25px] gap-y-6 pt-6 sm:pt-8">
        <WhyOpenNestCard title="Beginner-Friendly Guides" paragraph="Step-by-step tutorials to guide you through the open-source space." />
        <WhyOpenNestCard title="Curated Resources" paragraph="Access to the best tools, guides, and articles for newcomers." />
        <WhyOpenNestCard title="Community Support" paragraph="Join our community and collaborate with others on open-source projects." />
        <WhyOpenNestCard title="Regular Updates" paragraph="Stay ahead with the latest trends and best practices in open source." />
      </main>
    </section>
  );
};

export default WhyOpenNest;
