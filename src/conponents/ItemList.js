import React from "react";
import { fruit } from "../FakeData";
import ItemCard from "./ItemCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const item = fruit;

const ItemList = () => {
  return (
    <div className="w-full list-items">
      <Swiper grabCursor={"true"} spaceBetween={20} slidesPerView={"auto"}>
        {item.length > 0 &&
          item.map((item) => (
            <SwiperSlide key={item.id}>
              <ItemCard item={item}></ItemCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default ItemList;
