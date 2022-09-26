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
    <div className="text-[10px] w-[100px] md:w-[200px] bg-[#fde4e4] text-black mt-5 border rounded-lg">
      <NavLink to={`/products/${item.id}`}>
        <img
          src={item.img}
          alt=""
          className="md:h-[200px] h-[100px] object-cover"
        />
      </NavLink>
      <div className="w-full md:p-2 md:text-xl ">{item.title}</div>
      <div className="text-red-700 md:text-lg bg-primary">${item.price}</div>
      <button
        onClick={() => hanldeAddToCart(item)}
        className="w-full md:p-2 md:text-sm text-white bg-[#66cc33] rounded-lg "
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default ItemCard;
