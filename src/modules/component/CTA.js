import React from "react";
import Button from "../../components/Button";

const CTA = () => {
  return (
    <section className="bg-primary px-[212px] py-16 text-center">
      <h1 className="font-semibold text-6xl leading-[92.8px]">Our Commitment to Openness</h1>
      <p className="text-[#04354A] -tracking-[1px] text-2xl">
        At OpenNest, we believe in transparency. Learn more about our mission,
        financials, and how you can get your hands on OpenNest merch
      </p>
      <div className="mt-11">
        <Button
          className="bg-blue text-white font-semibold text-base px-[153px] py-4"
          text="Learn More"
        />
      </div>
    </section>
  );
};

export default CTA;
