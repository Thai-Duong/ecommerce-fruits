import React, { Fragment, useEffect, useState } from "react";
import Banner from "../conponents/Banner";
import ItemCard from "../conponents/ItemCard";
import { fruit } from "../FakeData";
const item = fruit;

const Product = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [allProducts, setAllProducts] = useState(item);
  useEffect(() => {
    if (category === "All") {
      setAllProducts(item);
    }
    if (category === "vietnam") {
      const pro = item.filter((item) => item.category === "vietnam");
      setAllProducts(pro);
    }
    if (category === "foreign") {
      const pro = item.filter((item) => item.category === "foreign");
      setAllProducts(pro);
    }
  }, [category]);

  return (
    <Fragment>
      <Banner
        type="https://fruitshop.7uptheme.net/wp-content/uploads/2017/04/banner-detail.jpg"
        className="h-[200px] w-full object-cover"
        children="All Product"
      ></Banner>
      <div className="text-center tx-5 page-container">
        <div className="mt-5">
          <div className="flex mt-5 text-xl">
            <button
              className="w-full p-2 mt-1 border"
              category={"All"}
              onClick={() => setCategory("All")}
            >
              All
            </button>
            <button
              className="w-full p-2 mt-1 border"
              category={"vietnam"}
              onClick={() => setCategory("vietnam")}
            >
              Domestic
            </button>
            <button
              className="w-full p-2 mt-1 border"
              category={"foreign"}
              onClick={() => setCategory("foreign")}
            >
              Foreign
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 mx-8 lg:gap-5 lg:grid-cols-4">
          {allProducts.length > 0 &&
            allProducts.map((item) => (
              <ItemCard key={item.id} item={item}></ItemCard>
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Product;
