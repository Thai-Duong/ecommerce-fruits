import React from "react";
import ItemCard from "../conponents/ItemCard";
import { fruit } from "../FakeData";
const item = fruit;

const Product = () => {
  return (
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
  );
};

export default Product;