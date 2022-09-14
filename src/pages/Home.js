import React, { Fragment } from "react";
import Banner from "../conponents/Banner";
import ItemList from "../conponents/ItemList";

const Home = () => {
  return (
    <div className="page-container">
      <Fragment>
        <Banner type="https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-banner-background-off-season-crazy-image_14669.jpg"></Banner>
        <div className="m-3 text-3xl font-bold text-center ">
          Best Seller Product
          <ItemList></ItemList>
        </div>
        <Banner type="http://wpdemo.magikthemes.com/brezza/wp-content/uploads/sites/8/2016/07/bottom-banner.jpg"></Banner>
      </Fragment>
    </div>
  );
};

export default Home;
