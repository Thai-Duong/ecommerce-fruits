import React, { Fragment } from "react";
import Banner from "../conponents/Banner";
import ItemList from "../conponents/ItemList";

const Home = () => {
  return (
    <div className="page-container">
      <Fragment>
        <Banner></Banner>
        <div className="m-3 text-3xl font-bold text-center ">
          Best Seller Product
          <ItemList></ItemList>
        </div>
      </Fragment>
    </div>
  );
};

export default Home;
