import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/fruitsSlice";
import { NavLink } from "react-router-dom";
const ItemCard = ({ item }) => {
  const dispacth = useDispatch();
  const hanldeAddToCart = (item) => {
    dispacth(addToCart(item));
  };
  return (
    <div className="relative w-[200px] bg-[#fde4e4] text-black  m-5 border rounded-lg ">
      <NavLink to={`/products/${item.id}`}>
        <img src={item.img} alt="" className="h-[200px] object-cover" />
      </NavLink>
      <div className="w-full p-2 text-xl ">{item.title}</div>
      <div className="text-lg text-red-700 bg-primary">${item.price}</div>
      <button
        onClick={() => hanldeAddToCart(item)}
        className="w-full p-2 text-sm text-white bg-[#66cc33] rounded-lg "
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default ItemCard;
