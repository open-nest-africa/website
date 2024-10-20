import React from "react";

const AuthLayout = ({ title, children, className }) => {
  return (
    <section className="w-full h-screen flex">
      <aside className={`${className} w-3/5 flex items-center`}>
        <h1 className="text-black font-bold text-4xl">{title} to OpenNest</h1>
        <div>{children}</div>
      </aside>
      <aside className="w-2/5 bg-light-yellow flex items-end px-10 pb-16">
        <div>
          <img src="/images/black-box.svg" alt="" />
        </div>
      </aside>
    </section>
  );
};

export default AuthLayout;
