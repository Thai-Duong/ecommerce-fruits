import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { cart } = useSelector((state) => state.fruits);

  return (
    <header className="flex bg-[#dd1c2e] justify-between p-3 text-xl text-white ">
      <div className="flex items-center justify-center gap-3 font-bold main">
        <NavLink to="/">
          <img
            src="https://pbs.twimg.com/profile_images/902519285616041984/ige9G6Ok_400x400.jpg"
            alt=""
            className="w-12 h-12 rounded-full "
          />
        </NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/feedback">FeedBack</NavLink>
      </div>
      <div className="flex items-center justify-center gap-3 text-3xl main">
        <NavLink to="/login" className="fa-solid fa-user"></NavLink>
        <NavLink to="/cart" className="relative p-2 fa-solid fa-cart-shopping ">
          <span className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 text-sm text-black rounded-full bg-slate-300">
            {cart.length}
          </span>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
