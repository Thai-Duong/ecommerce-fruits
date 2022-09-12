import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { fruit } from "../FakeData";
import { addToCart } from "../redux/fruitsSlice";
const Detail = () => {
  const proid = useParams();
  const proDetail = fruit.filter((x) => x.id == proid.id);
  const item = proDetail[0];

  const dispacth = useDispatch();
  const hanldeAddToCart = (item) => {
    dispacth(addToCart(item));
  };
  return (
    <div className="flex gap-4 mt-5 page-container">
      <img src={item.img} alt="" className="border w-[350px]" />
      <div className="m-5">
        <div className="text-3xl font-bold ">{item.title}</div>
        <div className="text-2xl text-red-500 ">Price: {item.price}$</div>
        <div className="text-lg font-bold ">{item.desc}</div>
        <button
          onClick={() => hanldeAddToCart(item)}
          className="p-2 mt-2 text-xl text-white bg-red-500 rounded-lg"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Detail;
