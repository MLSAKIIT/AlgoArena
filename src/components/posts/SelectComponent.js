"use client";
import React from "react";

const SelectComponent = ({ name, id, options, onChange, value }) => {
  return (
    <select
      value={value}
      name={name}
      id={id}
      onChange={onChange}
      className="border-color-2 border-2 text-xs hover:shadow-[0_0_1rem_0px_#9d5ae3]  outline-none border-none hover:[text-shadow:_0px_0px_5px_rgb(0_0_0)] cursor-pointer transition duration-200 p-2 rounded-2xl bg-color-6"
    >
      <option value="">Select {name}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectComponent;
