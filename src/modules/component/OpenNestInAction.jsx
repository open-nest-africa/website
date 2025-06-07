import React from "react";

const OpenNestInAction = () => {
  return (
    <section className="py-8 sm:py-10 md:py-14 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[100px]">
      <div className="text-center">
        <h1 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] leading-tight sm:leading-[1.4] md:leading-[1.3] lg:leading-[1.2] xl:leading-[92.8px] font-semibold text-center">OpenNest in Action</h1>
        <p className="text-[#04354A] text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2 sm:mt-3 md:mt-4">Hear from our community members</p>
      </div>
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8 md:mt-12">
        <Card
          name="Sarah,"
          image="/images/member-icon1.svg"
          paragraph="OpenNest provided me with the perfect platform to start my open source journey. The community support and resources helped me make my first contribution with confidence."
          jobRole="Frontend Developer"
        />
         <Card
          name="Michael,"
          image="/images/member-icon2.svg"
          paragraph="As a designer, I found OpenNest's approach to open source incredibly welcoming. The platform helped me understand how to contribute design work to open source projects effectively."
          jobRole="UI/UX Designer"
        />
      </main>
    </section>
  );
};

export default OpenNestInAction;

export const Card = ({ image, name, paragraph, jobRole }) => {
  return (
    <div className="drop-shadow-custom border-2 bg-white border-[#0C9EDD36] rounded-[20px] px-4 sm:px-6 md:px-8 lg:px-[40px] py-6 sm:py-8 md:py-12 lg:py-[60px] text-[#04354A] -tracking-[1px]">
      <div className="flex items-center gap-x-2 sm:gap-x-3">
        <span>
          <img src={image} alt="Employee picture" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
        </span>
        <h5 className="font-medium text-lg sm:text-xl md:text-2xl">
          <span className="font-semibold">{name}</span>
          {jobRole}
        </h5>
      </div>
      <p className="text-base sm:text-lg md:text-xl pt-3 sm:pt-4 leading-relaxed">
      {paragraph}
      </p>
    </div>
  );
};