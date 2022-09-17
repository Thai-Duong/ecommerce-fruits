import React, { Fragment } from "react";
import Banner from "../conponents/Banner";
import ItemCard from "../conponents/ItemCard";
import { fruit } from "../FakeData";
const item = fruit;

const Product = () => {
  return (
    <Fragment>
      <Banner
        type="https://fruitshop.7uptheme.net/wp-content/uploads/2017/04/banner-detail.jpg"
        className="h-[200px] w-full object-cover"
        children="All Product"
      ></Banner>
      <div className="mt-5 page-container">
        <div className="grid grid-cols-5 gap-4 text-center">
          {item.length > 0 &&
            item.map((item) => (
              <div key={item.id}>
                <ItemCard item={item}></ItemCard>
              </div>
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Product;
