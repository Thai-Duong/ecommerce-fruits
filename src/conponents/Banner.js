import React from "react";

const Banner = ({ type }) => {
  return (
    <div className="">
      <img src={type} alt="" className="object-cover w-full h-full" />
    </div>
  );
};

export default Banner;
