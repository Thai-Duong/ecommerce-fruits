import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import Banner from "../conponents/Banner";
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
    <Fragment>
      <Banner
        type="https://fruitshop.7uptheme.net/wp-content/uploads/2017/04/banner-detail.jpg"
        className="h-[200px] w-full object-cover"
        children="Detail"
      ></Banner>
      <div className="flex flex-col mt-5 md:gap-4 page-container">
        <div className="flex flex-col text-sm md:flex-row">
          <img src={item.img} alt="" className="w-[350px]" />
          <div className="m-5">
            <div className="font-bold md:text-3xl ">{item.title}</div>
            <div className="text-red-500 md:text-2xl ">
              Price: {item.price}$
            </div>
            <div className="font-bold md:text-lg">{item.desc}</div>
            <button
              onClick={() => hanldeAddToCart(item)}
              className="p-2 mt-2 text-white bg-red-500 rounded-lg md:text-xl"
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
    </Fragment>
  );
};

export default Detail;
