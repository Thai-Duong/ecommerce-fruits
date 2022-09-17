import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../conponents/Banner";
import ItemCart from "../conponents/ItemCart";

import {
  clearCart,
  delToCart,
  descreaseCart,
  increaseCart,
} from "../redux/fruitsSlice";
const Card = () => {
  const { cart } = useSelector((state) => state.fruits);
  const dispacth = useDispatch();
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
    <Fragment>
      <Banner
        type="https://fruitshop.7uptheme.net//wp-content/uploads/2017/04/banner-list.jpg"
        className="h-[200px] w-full object-cover"
        children="Cart"
      ></Banner>
      <div className="page-container">
        {cart.length > 0 ? (
          <div className="flex flex-row">
            <div className="w-[70%] text-lg text-center">
              {cart.length > 0 &&
                cart.map((item) => (
                  <ItemCart
                    key={item.id}
                    item={item}
                    hanldeDelToCart={hanldeDelToCart}
                    hanldeMinusCart={hanldeMinusCart}
                    hanldePlusCart={hanldePlusCart}
                  ></ItemCart>
                ))}
              <button
                onClick={() => hanldeClearCart()}
                className="p-2 m-2 text-white bg-red-600"
              >
                Clear Cart
              </button>
            </div>
            <div className="w-[30%] h-[150px] m-5 p-5 shadow-lg text-xl">
              <span>TOTAL: ${totalPrice}</span>
              <div className="p-2 mt-5 text-white bg-blue-400 rounded-lg">
                Paying Now
              </div>
            </div>
          </div>
        ) : (
          <div className="p-2 m-10 text-2xl font-bold text-center text-red-500 ">
            CART EMTY
          </div>
        )}
      </div>
    </Fragment>
  );
};
export default Card;
