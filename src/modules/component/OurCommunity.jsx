import React from "react";
import Button from "../../components/Button";

const OurCommunity = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-y-10 lg:gap-x-[30px] py-10 sm:py-16 lg:py-20 px-4 sm:px-8 md:px-16 lg:pl-24">
      <aside className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-snug lg:leading-[92.8px] font-semibold">
          Our Community
        </h2>
        <p className="text-[#04354A] tracking-normal sm:-tracking-[0.5px] md:-tracking-[1px] text-base sm:text-lg md:text-xl lg:text-2xl mt-4">
          Join our vibrant community of open source enthusiasts. Connect with
          fellow developers, designers, and technical writers. Share knowledge,
          collaborate on projects, and grow together in the open source
          ecosystem.
        </p>
        <div className="mt-8 sm:mt-10 md:mt-11">
          <Button
            text="Join Our Community"
            className="bg-blue text-white text-sm sm:text-base font-semibold px-8 sm:px-12 md:px-[114px] py-3 sm:py-4"
          />
        </div>
      </aside>
      <aside className="w-full lg:w-1/2 relative right-0">
        <img
          src="/images/community-image.svg"
          className="h-64 sm:h-80 md:h-[30rem] w-full object-contain"
          alt="Lot of people standing together"
        />
      </aside>
    </section>
  );
};

export default OurCommunity;
