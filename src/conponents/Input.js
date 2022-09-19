import React from "react";
import { useController } from "react-hook-form";

const Input = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <input
      {...field}
      {...props}
      className="w-full p-4 mt-2 mb-2 bg-white border border-gray-500 rounded-lg outline-none focus:border-blue-500"
    ></input>
  );
};

export default Input;
