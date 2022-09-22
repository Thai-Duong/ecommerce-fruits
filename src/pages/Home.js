import React, { Fragment, useEffect, useState } from "react";
import Banner from "../conponents/Banner";
import ItemList from "../conponents/ItemList";
const Home = () => {
  return (
    <Fragment>
      <Banner
        type="https://hoaquafuji.com/storage/app/uploads/public/fb9/03f/f84/thumb__1920_0_0_0_auto.jpg"
        className="relative"
      ></Banner>
      <div className="text-3xl page-container">
        <div className="flex flex-row justify-between m-10">
          <div className="text-green-500 fa-solid fa-truck"> Free Shipping</div>
          <div className="text-green-500 fa-solid fa-truck"> Free Refund</div>
          <div className="text-green-500 fa-solid fa-truck"> Support 24/7</div>
        </div>
      </div>
      <div className="page-container">
        <div className="m-3 text-3xl font-bold text-center ">
          FLASH DEALS
          <ItemList></ItemList>
        </div>
      </div>
      <Banner
        type="http://wpdemo.magikthemes.com/brezza/wp-content/uploads/sites/8/2016/07/bottom-banner.jpg"
        className="w-full"
      ></Banner>

      <div className="flex flex-row gap-5 mt-20 page-container">
        <div className="flex flex-col ">
          <img
            src="https://fruitshop.7uptheme.net/wp-content/uploads/2017/04/fruit_blog_09.jpg"
            alt=""
            className="w-full mb-2"
          />
          <div className="m-3">
            <span className="bg-[#66cc33] text-white rounded-2xl p-2">
              Fruits Fresh
            </span>
            <div className="mt-5 text-2xl font-semibold">
              Most early plant patents were roses
            </div>
            <span>
              Organic food consumption is rapidly increasing. The heightened
              interest in the global environment and a willingness to look
            </span>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="mb-3">
            <span className="bg-[#66cc33] text-white rounded-2xl p-2">
              Fruits Fresh
            </span>
            <div className="mt-5 text-2xl font-semibold">
              This is pretty cool
            </div>
            <span>
              Organic food consumption is rapidly increasing. The heightened
              interest in the global environment and a willingness to look
            </span>
          </div>
          <img
            src="https://fruitshop.7uptheme.net/wp-content/uploads/2017/04/fruit_blog_10.jpg"
            alt=""
            className="w-full"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
