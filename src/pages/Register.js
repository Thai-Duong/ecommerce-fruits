import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    adress: yup.string().required(),
    phone: yup.string().required(),
    password: yup.string().required(),
  })
  .required();
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="page-container">
      <div className="w-[400px] mx-auto my-10">
        <div className="text-3xl text-center">Register</div>
        <div className="flex flex-col gap-3">
          <label htmlFor="name">Name</label>
          <input
            {...register("name")}
            id="name"
            type="text"
            placeholder="Enter your name"
            className="p-4 bg-white border border-gray-500 rounded-lg outline-none focus:border-blue-500"
          />
        </div>
        {errors.name && (
          <p className="text-sm text-red-500">Please inter your name</p>
        )}
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
          <label htmlFor="adress">Adress</label>
          <input
            {...register("adress")}
            id="adress"
            type="text"
            placeholder="Enter your adress"
            className="p-4 bg-white border border-gray-500 rounded-lg outline-none focus:border-blue-500"
          />
        </div>
        {errors.adress && (
          <p className="text-sm text-red-500">Please inter your adress</p>
        )}
        <div className="flex flex-col gap-3">
          <label htmlFor="phone">Phone</label>
          <input
            {...register("phone")}
            id="phone"
            type="number"
            placeholder="Enter your phone"
            className="p-4 bg-white border border-gray-500 rounded-lg outline-none focus:border-blue-500"
          />
        </div>
        {errors.phone && (
          <p className="text-sm text-red-500">Please inter your phone</p>
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
      </div>
    </form>
  );
};

export default Register;