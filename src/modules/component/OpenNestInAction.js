import React from "react";

const OpenNestInAction = () => {
  return (
    <section className="py-14 px-[100px]">
      <div className="text-center">
        <h1 className="text-black text-[64px] leading-[92.8px] font-semibold text-center">OpenNest in Action</h1>
        <p className="text-[#04354A] text-3xl">Hear from our community members</p>
      </div>
      <main className="grid grid-cols-2 gap-x-6 mt-12">
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
    <div className="drop-shadow-custom border-2 bg-white border-[#0C9EDD36] rounded-[20px] px-[40px] py-[60px] text-[#04354A] -tracking-[1px]">
      <div className="flex items-center gap-x-3">
        <span>
          <img src={image} alt="" />
        </span>
        <h5 className="font-medium text-2xl">
          <span className="font-semibold">{name}</span>
          {jobRole}
        </h5>
      </div>
      <p className="text-xl pt-4">
      {paragraph}
      </p>
    </div>
  );
};
