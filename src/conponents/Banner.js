import React from "react";

const Banner = ({ type, className, children }) => {
  return (
    <div className="relative mt-[60px]">
      <img src={type} alt="" className={className} />
      <div className="absolute text-4xl text-white left-10 top-2/4">
        {children}
      </div>
    </div>
  );
};

export default Banner;
