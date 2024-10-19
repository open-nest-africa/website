import React from "react";
import WhyOpenNestCard from "../../components/WhyOpenNestCard";

const WhyOpenNest = () => {
  return (
    <section className="px-[100px]">
      <h1 className="text-black text-[64px] leading-[92.8px] font-semibold text-center">Why Choose OpenNest</h1>
      <main className="grid grid-cols-2 gap-x-[25px] gap-y-6 pt-8">
        <WhyOpenNestCard title="Beginner-Friendly Guides" paragraph="Step-by-step tutorials to guide you through the open-source space." />
        <WhyOpenNestCard title="Curated Resources" paragraph="Access to the best tools, guides, and articles for newcomers." />
        <WhyOpenNestCard title="Community Support" paragraph="Join our community and collaborate with others on open-source projects." />
        <WhyOpenNestCard title="Regular Updates" paragraph="Stay ahead with the latest trends and best practices in open source." />
      </main>
    </section>
  );
};

export default WhyOpenNest;
