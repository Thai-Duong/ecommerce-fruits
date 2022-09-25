import React, { Fragment } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import Banner from "../conponents/Banner";
import Input from "../conponents/Input";
const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();
const onSubmit = (data) => console.log(data);

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <Fragment>
      <Banner
        type="https://fruitshop.7uptheme.net/wp-content/uploads/2017/04/banner-blog-list.jpg"
        className="h-[200px] w-full object-cover"
        children="Login"
      ></Banner>
      <form onSubmit={handleSubmit(onSubmit)} className="page-container">
        <div className="md:w-[400px] md:mx-auto w-[350px] mx-auto my-5">
          <div className="flex flex-col gap-3">
            <label htmlFor="email">Email</label>
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
            <label htmlFor="password">Password</label>
            <Input
              name="password"
              type="password"
              control={control}
              placeholder="Enter your password"
            ></Input>
          </div>
          {errors.password && (
            <p className="text-sm text-red-500">Please inter your password</p>
          )}
          <button className="w-full p-5 mt-5 mb-5 text-white bg-blue-500 rounded-lg">
            Submit
          </button>
          <NavLink to="/register">Don't have an account ? Create one !</NavLink>
        </div>
      </form>
    </Fragment>
  );
};

export default Login;
