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
    accept: yup.boolean().required(),
  })
  .required();
const Register = () => {
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
        type="https://fruitshop.7uptheme.net/wp-content/uploads/2017/04/banner-blog-list.jpg"
        className="h-[200px] w-full object-cover"
        children="Resgiter"
      ></Banner>
      <form onSubmit={handleSubmit(onSubmit)} className="page-container">
        <div className="md:w-[400px] md:mx-auto w-[350px] mx-auto my-5">
          <div className="flex flex-col gap-3">
            <label htmlFor="name">Name</label>
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
          <div className="flex flex-col gap-3">
            <label htmlFor="name">Email</label>
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
          <div className="flex flex-col gap-3">
            <label htmlFor="adress">Adress</label>
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
          <div className="flex flex-col gap-3">
            <label htmlFor="phone">Phone</label>
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
          <div className="flex flex-col gap-3">
            <label htmlFor="password">Password</label>
            <Input
              name="password"
              type="text"
              control={control}
              placeholder="Enter your password"
            ></Input>
          </div>
          {errors.password && (
            <p className="text-sm text-red-500">Please inter your password</p>
          )}
          <div>
            <Input
              name="accept"
              type="checkbox"
              control={control}
              placeholder="Pleas accept terms and conditions"
            ></Input>
            <span>I accept the terms and conditions</span>
          </div>
          {errors.accept && (
            <p className="text-sm text-red-500 ">
              Please accept the terms and conditions
            </p>
          )}
          <button className="w-full p-5 mt-5 text-white bg-blue-500 rounded-lg">
            Submit
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default Register;
