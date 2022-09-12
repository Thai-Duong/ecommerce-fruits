import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();
const onSubmit = (data) => console.log(data);

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="page-container">
      <div className="w-[400px] mx-auto my-10">
        <div className="text-3xl text-center">Login</div>

        <div className="flex flex-col gap-3">
          <label htmlFor="name">Email</label>
          <input
            {...register("email")}
            id="email"
            type="text"
            placeholder="Enter your email"
            className="p-4 bg-white border border-gray-500 rounded-lg outline-none focus:border-blue-500"
          />
        </div>
        {errors.email && (
          <p className="text-sm text-red-500">Please inter your email</p>
        )}

        <div className="flex flex-col gap-3">
          <label htmlFor="password">Password</label>
          <input
            {...register("password")}
            id="password"
            type="password"
            placeholder="Enter your password"
            className="p-4 bg-white border border-gray-500 rounded-lg outline-none focus:border-blue-500"
          />
        </div>
        {errors.password && (
          <p className="text-sm text-red-500">Please inter your password</p>
        )}
        <button className="w-full p-5 mt-5 text-white bg-blue-500 rounded-lg">
          Submit
        </button>
        <NavLink to="/register">Register ?</NavLink>
      </div>
    </form>
  );
};

export default Login;
