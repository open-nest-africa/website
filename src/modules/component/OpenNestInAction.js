import React from "react";

const OpenNestInAction = () => {
  return (
    <section className="py-12 px-[100px]">
      <div className="text-center">
        <h1 className="text-black text-[64px] leading-[92.8px] font-semibold text-center">OpenNest in Action</h1>
        <p className="text-[#04354A] text-3xl">Hear from our community members</p>
      </div>
      <main className="grid grid-cols-2 gap-x-6 mt-12">
        <Card
          name="Amina,"
          image="/images/member-icon1.svg"
          paragraph="Openenest made my open-source journey so much easier. Now, I confidently contribute to multiple projects."
          jobRole=" Product Designer"
        />
         <Card
          name="Amina,"
          image="/images/member-icon2.svg"
          paragraph="Openenest made my open-source journey so much easier. Now, I confidently contribute to multiple projects."
          jobRole=" Product Designer"
        />
      </main>
    </section>
  );
};

export default OpenNestInAction;

const Card = ({ image, name, paragraph, jobRole }) => {
  return (
    <div className="drop-shadow-custom border-2 border-[#0C9EDD36] rounded-[20px] px-[54px] py-[60px] text-[#04354A] -tracking-[1px]">
      <div className="flex items-center gap-x-5">
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
