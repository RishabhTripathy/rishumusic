import Image from "next/image";
import React, { useState } from "react";

export default function A() {
  const array = [];
  const [view, setView] = useState(0);

  const prev = () => {
    setView(-1);
  };

  const next = () => {
    setView(index + 1);
  };
  return (
    <div
      className="flex
    justify-center bg-black bg-opacity-50  items-center"
    >
      <div
        method="dialog"
        className="border-2 overflow-y-clip relative my-[15rem] px-8 pb-6 pt-28 rounded-lg max-w-md bg-gradient-to-b from-gray-300 to-gray-200  shadow-xl"
      >
      <div className="bg-gradient-to-r from-red-500 to-red-400 border-red-400 border-[16px]  h-32 -left-5 absolute -top-16 w-[25rem] rounded-b-full   "></div>
        <button className="btn-circle btn-sm bg-gray-400 font-bold  absolute right-2 top-2">
          ✕
        </button>
        <h1 className="font-bold max-w-[18rem]  text-center  text-3xl ">
          Connect with Livguard Expert Today
        </h1>
        <div className="grid text-gray-600 text-sm grid-cols-1 mt-4 gap-2">
          <div className="flex flex-col  gap-1">
            <label htmlFor="name" className="font-bold ml-2">
              Name
            </label>
            <input
              type="text"
              className="rounded-full input  border border-black"
            />
          </div>
          <div className="flex flex-col  gap-1">
            <label htmlFor="email" className="font-bold ml-2">
              Email
            </label>
            <input
              type="email"
              className="rounded-full input  border border-black"
            />
          </div>
          <div className="flex flex-col  gap-1">
            <label htmlFor="name" className="font-bold ml-2">
              Phone Number
            </label>
            <input
              type="tel"
              className="rounded-full input border border-black"
            />
          </div>
          <div className="flex  mt-4 items-center justify-center flex-col gap-2">
            <div className="flex  my-auto justify-center gap-1 items-center">
              <input type="checkbox" name="" id="" checked className="accent-orange-700" />
              <p className="text-xs">
                I accept the <b>term of use</b> & <b>Privacy policy</b>
              </p>
            </div>
            <button className="px-24 py-4 mx-auto  rounded-full bg-gradient-to-r from-gray-500 to-gray-600 font-bold">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
