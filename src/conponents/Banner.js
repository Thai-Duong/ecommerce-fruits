import React from "react";

const Banner = ({ type, className, children }) => {
  return (
    <div>
      <img src={type} alt="" className={className} />
      {children}
    </div>
  );
};

export default Banner;
