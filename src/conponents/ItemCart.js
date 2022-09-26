import React from "react";

const ItemCart = ({
  item,
  hanldeDelToCart,
  hanldeMinusCart,
  hanldePlusCart,
}) => {
  return (
    <div
      key={item.id}
      className="grid items-center grid-cols-6 gap-2 m-5 text-[12px] border rounded-lg md:gap-7"
    >
      <img src={item.img} alt="" className="w-[100px] h-[100px]" />
      <h3>{item.title}</h3>
      <h3>${item.price}</h3>
      <h3 className="flex flex-cols">
        <button
          className="mr-2 fa-regular fa-square-plus"
          onClick={() => hanldePlusCart(item)}
        ></button>
        <span>{item.cartQuantity}</span>
        <button
          className="ml-2 fa-regular fa-square-minus"
          onClick={() => hanldeMinusCart(item)}
        ></button>
      </h3>
      <h3>${item.price * item.cartQuantity}</h3>
      <h3>
        <button
          className="w-full fa-solid fa-trash-can"
          onClick={() => hanldeDelToCart(item)}
        ></button>
      </h3>
    </div>
  );
};

export default ItemCart;
