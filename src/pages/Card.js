import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import {
  clearCart,
  delToCart,
  descreaseCart,
  increaseCart,
} from "../redux/fruitsSlice";
const Card = () => {
  const { cart } = useSelector((state) => state.fruits);
  const dispacth = useDispatch();
  console.log(cart);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;

    cart.forEach((item) => {
      total += item.price * item.cartQuantity;
    });

    setTotalPrice(total);
  }, [cart, setTotalPrice]);
  const hanldeDelToCart = (item) => {
    dispacth(delToCart(item));
  };
  const hanldePlusCart = (item) => {
    dispacth(increaseCart(item));
  };
  const hanldeMinusCart = (item) => {
    dispacth(descreaseCart(item));
  };
  const hanldeClearCart = () => {
    dispacth(clearCart());
  };
  return (
    <div className=" page-container">
      {cart.length > 0 ? (
        <div className="">
          <div className="p-5 text-lg text-center shadow-sm ">
            <div className="grid grid-cols-6 gap-7">
              <h3>IMAGE</h3>
              <h3>TITLE</h3>
              <h3>PRICE</h3>
              <h3>QUANTITY</h3>
              <h3>TOTAL</h3>
              <div></div>
            </div>
            {cart.length > 0 &&
              cart.map((item) => (
                <div
                  key={item.id}
                  className="grid items-center grid-cols-6 gap-7"
                >
                  <img src={item.img} alt="" />
                  <h3>{item.title}</h3>
                  <h3>${item.price}</h3>
                  <h3>
                    <button
                      className="mr-2 fa-regular fa-square-plus"
                      onClick={() => hanldePlusCart(item)}
                    ></button>
                    <span>{item.cartQuantity}</span>
                    <button
                      className="ml-2 fa-regular fa-square-minus"
                      onClick={() => hanldeMinusCart(item)}
                    ></button>
                  </h3>
                  <h3>${item.price * item.cartQuantity}</h3>
                  <h3>
                    <button
                      className="fa-solid fa-trash-can"
                      onClick={() => hanldeDelToCart(item)}
                    ></button>
                  </h3>
                </div>
              ))}
            <button
              onClick={() => hanldeClearCart()}
              className="p-2 m-2 text-white bg-red-600"
            >
              Clear Cart
            </button>
          </div>
          <div className="flex items-center justify-between p-5 shadow-lg">
            <span className="text-xl">TOTAL: ${totalPrice}</span>
            <NavLink
              to="/pay"
              className="p-2 text-white bg-blue-400 rounded-lg"
            >
              Paying Now
            </NavLink>
          </div>
        </div>
      ) : (
        <div className="m-10 text-3xl font-bold text-red-500 ">CART EMTY</div>
      )}
    </div>
  );
};
export default Card;
