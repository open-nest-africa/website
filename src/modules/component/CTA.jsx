import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-primary px-4 sm:px-8 md:px-16 lg:px-32 xl:px-52 py-8 md:py-12 lg:py-16 text-center">
      <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-snug md:leading-normal lg:leading-[92.8px] mb-4 md:mb-6">
        Our Commitment to Open Source
      </h1>
      <p className="text-[#04354A] text-base sm:text-lg md:text-xl lg:text-2xl tracking-tight mx-auto max-w-3xl">
        We're dedicated to making open source accessible to everyone. Join us in
        building a diverse, inclusive community where knowledge is shared freely
        and innovation thrives.
      </p>
      <div className="mt-6 md:mt-8 lg:mt-11">
        <Link to="/about-us">
          <Button
            className="bg-blue text-white font-semibold text-sm sm:text-base px-6 sm:px-12 md:px-24 lg:px-36 py-3 md:py-4 w-full sm:w-auto"
            text="Learn More"
          />
        </Link>
      </div>
    </section>
  );
};

export default CTA;
