import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-[#dd1c2e] text-white ">
      <div className="grid grid-cols-1 p-5 mt-5 text-[10px] md:gap-20 md:text-lg md:grid-cols-4">
        <NavLink to="/" className="justify-between">
          <img
            src="https://pbs.twimg.com/profile_images/902519285616041984/ige9G6Ok_400x400.jpg"
            alt=""
            className="md:w-[200px]  w-[100px]"
          />
        </NavLink>
        <div className="flex flex-col justify-between gap-3 mt-2">
          <div className="text-lg font-bold">Contact</div>
          <h4>Adress: Ho Chi Minh City</h4>
          <h4>Phone: 0376637529</h4>
          <h4>Email: Thaiduong.080300@gmail.com</h4>
        </div>
        <div className="flex flex-col justify-between gap-3 mt-2">
          <div className="text-lg font-bold">Website</div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/product">Product</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div className="flex flex-col justify-between gap-3 mt-2">
          <div className="text-lg font-bold">News</div>
          <div className="flex items-center border ">
            <input
              type="text"
              className="w-full px-3 py-2 border "
              placeholder="Email"
            />
            <span className="p-3 bg-[#dd1c2e] fa-solid fa-paper-plane"></span>
          </div>
          <h4>Follow</h4>
          <div className="flex flex-start md:text-xl gap-x-3">
            <NavLink to="#">
              <i className="fa-brands fa-instagram"></i>
            </NavLink>
            <NavLink to="#">
              <i className="fa-brands fa-facebook"></i>
            </NavLink>
            <NavLink to="#">
              <i className="fa-brands fa-youtube"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
