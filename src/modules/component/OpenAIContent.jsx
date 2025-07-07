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
              <img src="/images/avatar.svg" alt="User avatar" />
            </span>
            <p className="text-2xl text-black">
              How do I get started in Open Source?
            </p>
          </div>
          <span className="text-[#292D32]">
            <PencilIcon className="w-5 h-5" />
          </span>
        </div>
        <div className="bg-white rounded-2xl p-9 space-y-12">
          <p className="text-black text-2xl leading-8">
            Getting started with open source can be intimidating, but it doesn't
            have to be. Start by exploring projects that interest you, reading
            their documentation, and looking for issues labeled "good first
            issue" or "help wanted". Remember, every contribution, no matter how
            small, makes a difference in the open source community.
          </p>
          <div className="flex items-center gap-x-6">
            <span>
              <img src="/images/camera-icon.svg" alt="Camera emoji" />
            </span>
            <span>
              <img src="/images/copy-icon.svg" alt="Copy emoji" />
            </span>
            <span>
              <img src="/images/thumbs-up-icon.svg" alt="Thumbs up emoji" />
            </span>
            <span>
              <img src="/images/thumbs-down-icon.svg" alt="Thumbs down emoji" />
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
