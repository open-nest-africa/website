import { PencilIcon } from "@heroicons/react/24/outline";
import React from "react";

const OpenAIContent = () => {
  const content = [
    "Beginners guide",
    "React good-first issues",
    "Technical Writing",
    "Latest Commits",
  ];
  return (
    <section className="w-full">
      <div className="w-full flex items-center justify-center">
        <div className="flex gap-x-1">
          {content.map((item) => (
            <Badge text={item} />
          ))}
        </div>
      </div>
      <main className="bg-[#CEECF875] rounded-2xl px-[58px] py-20 mt-8">
        <div className="flex items-center justify-between px-10 pb-[22px]">
          <div className="flex items-center gap-x-2">
            <span>
              <img src="/images/avatar.svg" alt="" />
            </span>
            <p className="text-2xl text-black">How do I get started in Open Source?</p>
          </div>
          <span className="text-[#292D32]">
            <PencilIcon className="w-5 h-5"/>
          </span>
        </div>
        <div className="bg-white rounded-2xl p-9 space-y-12">
          <p className="text-black text-2xl leading-8">
            Simple, everyday activity like walking, swimming, gardening and
            dancing can ease some of the pain directly by blocking pain signals
            to the brain. Activity also helps lessen pain by stretching stiff
            and tense muscles, ligaments and joints.
          </p>
          <div className="flex items-center gap-x-6">
            <span>
              <img src="/images/camera-icon.svg" alt="" />
            </span>
            <span>
              <img src="/images/copy-icon.svg" alt="" />
            </span>
            <span>
              <img src="/images/thumbs-up-icon.svg" alt="" />
            </span>
            <span>
              <img src="/images/thumbs-down-icon.svg" alt="" />
            </span>
          </div>
        </div>
      </main>
    </section>
  );
};

export default OpenAIContent;

const Badge = ({ text }) => {
  return (
    <div className="bg-[#DDD30C] rounded-lg p-2 text-[#2C2A02] text-sm">
      {text}
    </div>
  );
};
