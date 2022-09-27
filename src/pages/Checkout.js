import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import * as yup from "yup";
import Input from "../conponents/Input";
import ItemCart from "../conponents/ItemCart";
const schema = yup
  .object({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().required(),
    adress: yup.string().required(),
  })
  .required();
const Checkout = () => {
  const { cart, totalAmount } = useSelector((state) => state.fruits);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-5 page-container">
      <div className="flex gap-3 mt-20 text-xl flex-col lg:flex-row">
        <div className="lg:w-[70%] p-5 border rounded-lg">
          <div className="flex gap-3">
            <div className="w-1/2">
              <div>FristName</div>
              <Input
                name="firstname"
                type="text"
                control={control}
                placeholder="Enter your fristname"
              ></Input>
              {errors.firstname && (
                <p className="text-sm text-red-500">
                  Please inter your firstname
                </p>
              )}
            </div>
            <div className="w-1/2">
              <div>LastName</div>
              <Input
                name="lastname"
                type="text"
                control={control}
                placeholder="Enter your lastname"
              ></Input>
              {errors.lastname && (
                <p className="text-sm text-red-500">
                  Please inter your lastname
                </p>
              )}
            </div>
          </div>
          <div className="">
            <div>Email</div>
            <Input
              name="email"
              type="email"
              control={control}
              placeholder="Enter your email"
            ></Input>
            {errors.email && (
              <p className="text-sm text-red-500">Please inter your email</p>
            )}
            <div>Adress</div>
            <Input
              name="adress"
              type="text"
              control={control}
              placeholder="Enter your adress"
            ></Input>
          </div>
        </div>
        <div className="lg:w-[30%] text-xl p-5 border rounded-lg">
          <div className="flex justify-between p-2">
            <span>Your Cart</span>
            <span>{cart.length}</span>
          </div>
          {cart.length > 0 &&
            cart.map((item) => (
              <div
                className="flex justify-between p-2 border flex-col-3"
                key={item.id}
                item={item}
              >
                <span>{item.title}</span>
                <span>${item.price * item.cartQuantity}</span>
              </div>
            ))}
          <div className="flex justify-between p-2 text-2xl font-bold text-center">
            <span>Total: </span>
            <span>${totalAmount}</span>
          </div>
          <button className="w-full p-5 mt-5 text-white bg-blue-500 rounded-lg">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Checkout;
