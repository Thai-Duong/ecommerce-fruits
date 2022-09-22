import React, { Fragment, useState } from "react";
import Banner from "../conponents/Banner";
import ItemCard from "../conponents/ItemCard";
import { fruit } from "../FakeData";
const item = fruit;

const Product = () => {
  const [search, setSearch] = useState("");
  const searchedProduct = item.filter((item) => {
    if (search.valueOf === "") {
      return item;
    }
    if (item.category.toLowerCase().includes(search.toLowerCase())) {
      return item;
    } else {
      return console.log("Not found");
    }
  });
  return (
    <Fragment>
      <Banner
        type="https://fruitshop.7uptheme.net/wp-content/uploads/2017/04/banner-detail.jpg"
        className="h-[200px] w-full object-cover"
        children="All Product"
      ></Banner>
      <div className="mt-5 page-container">
        <div className="m-5">
          <input
            type="text"
            placeholder="You want to find"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-10 py-2 border"
          />
          <div className="">
            <select className="w-50">
              <option>Default</option>
              <option value="Trái Cây Trong">Alphabetically, A-Z</option>
              <option value="descending">Alphabetically, Z-A</option>
              <option value="high-price">High Price</option>
              <option value="low-price">Low Price</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-4 text-center">
          {searchedProduct.length > 0 &&
            searchedProduct.map((item) => (
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
