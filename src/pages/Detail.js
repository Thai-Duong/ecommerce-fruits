import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import ItemList from "../conponents/ItemList";
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
    <div className="flex flex-col gap-4 mt-5 page-container">
      <div className="flex flex-row">
        <img src={item.img} alt="" className="border w-[350px]" />
        <div className="m-5">
          <div className="text-3xl font-bold ">{item.title}</div>
          <div className="text-2xl text-red-500 ">Price: {item.price}$</div>
          <div className="text-lg font-bold">{item.desc}</div>
          <button
            onClick={() => hanldeAddToCart(item)}
            className="p-2 mt-2 text-xl text-white bg-red-500 rounded-lg"
          >
            ADD TO CART
          </button>
        </div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold ">You might also like</div>
        <ItemList></ItemList>
      </div>
    </div>
  );
};

export default Detail;
