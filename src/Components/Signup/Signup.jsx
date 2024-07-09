import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

export default function Signup() {
  const [confirmPassShow, setConfirmPassShow] = useState(false);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-slate-50 p-10 rounded">
        <p className="text-cyan-500 text-center pb-2 text-xl">
          Welcome to job site
        </p>
        <div className="mb-1">
          <label htmlFor="" className="text-xs">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-3 py-1 focus:outline-none text-[14px] bg-transparent border rounded-[4px] placeholder:text-[12px] "
          />
        </div>
        <div className="mb-1">
          <label htmlFor="" className="text-xs">
            Email
          </label>
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full px-3 py-1 focus:outline-none text-[14px] bg-transparent border rounded-[4px] placeholder:text-[12px] "
          />
        </div>
        <div className="w-full relative">
          <label htmlFor="" className="text-xs">
            Password
          </label>
          <input
            required
            className="w-full px-3 py-1 focus:outline-none text-[14px] bg-transparent border rounded-[4px] placeholder:text-[12px]  md:placeholder:text-[12px] focus:border-primary  transition ease-linear duration-100"
            type={`${confirmPassShow ? "text" : "password"}`}
            placeholder="Confirm password"
          />
          <button
            onClick={() => setConfirmPassShow(!confirmPassShow)}
            type="button"
            className="absolute top-8 right-3 cursor-pointer text-[16px]"
          >
            {!confirmPassShow ? <IoMdEyeOff /> : <IoMdEye />}
          </button>
        </div>
        <div className="flex items-center justify-center mt-5">
          <button className="border text-[12px] bg-blue-400 text-white px-3 py-1 rounded">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
