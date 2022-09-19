import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Banner from "../conponents/Banner";
import Input from "../conponents/Input";
const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    adress: yup.string().required(),
    phone: yup.string().required(),
    password: yup.string().required(),
  })
  .required();
const Contact = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <Fragment>
      <Banner
        type="https://fruitshop.7uptheme.net//wp-content/uploads/2017/04/banner-list.jpg"
        className="h-[200px] w-full object-cover"
        children="Contact"
      ></Banner>
      <form onSubmit={handleSubmit(onSubmit)} className="page-container">
        <div className="w-[500px] mx-auto my-10 ">
          <div className="p-2 mb-4 text-3xl text-center text-black ">
            Feedback
          </div>
          <div className="flex flex-col gap-3 mt-5">
            <Input
              name="name"
              type="text"
              control={control}
              placeholder="Enter your name"
            ></Input>
          </div>
          {errors.name && (
            <p className="text-sm text-red-500">Please inter your name</p>
          )}
          <div className="flex flex-col gap-3 mt-5">
            <Input
              name="email"
              type="email"
              control={control}
              placeholder="Enter your email"
            ></Input>
          </div>
          {errors.email && (
            <p className="text-sm text-red-500">Please inter your email</p>
          )}
          <div className="flex flex-col gap-3 mt-5">
            <Input
              name="adress"
              type="text"
              control={control}
              placeholder="Enter your adress"
            ></Input>
          </div>
          {errors.adress && (
            <p className="text-sm text-red-500">Please inter your adress</p>
          )}
          <div className="flex flex-col gap-3 mt-5">
            <Input
              name="phone"
              type="number"
              control={control}
              placeholder="Enter your phone"
            ></Input>
          </div>
          {errors.phone && (
            <p className="text-sm text-red-500">Please inter your phone</p>
          )}
          <div className="flex flex-col gap-3 mt-5">
            <textarea
              name="text"
              type="text"
              control={control}
              placeholder="Enter"
              className="p-4 bg-white border border-gray-500 rounded-lg outline-none focus:border-blue-500"
            ></textarea>
          </div>
          {errors.password && (
            <p className="text-sm text-red-500">Please inter your password</p>
          )}

          <button className="w-full p-5 mt-5 text-white bg-blue-500 rounded-lg">
            Send
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default Contact;
