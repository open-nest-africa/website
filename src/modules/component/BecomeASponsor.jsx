import React from "react";
import Button from "../../components/Button";

const BecomeASponsor = () => {
  return (
    <section className="bg-[#F0F8FF] px-4 sm:px-8 md:px-16 lg:px-32 xl:px-52 py-10 sm:py-16 lg:py-20 text-center">
      <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight sm:leading-snug md:leading-normal text-black mb-4 md:mb-6">
        Help Us Make a Bigger Impact
      </h2>
      <p className="text-[#04354A] text-base sm:text-lg md:text-xl lg:text-2xl tracking-tight mx-auto max-w-3xl mb-8 md:mb-10">
        Your sponsorship helps us create more opportunities for open source contributors,
        run community events, and provide resources that empower developers worldwide.
        Together, we can build a more inclusive open source ecosystem.
      </p>
      <a
        href="https://opencollective.com/open-nest-africa#category-CONTRIBUTE"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          className="bg-blue text-white font-semibold text-sm sm:text-base px-8 sm:px-16 md:px-24 py-3 md:py-4 w-full sm:w-auto"
          text="Become a Sponsor"
        />
      </a>
    </section>
  );
};

export default BecomeASponsor;
