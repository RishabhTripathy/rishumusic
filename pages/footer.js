import React from "react";

export default function Footer() {
  return (
    <div className="py-16 text-white">
      <div className="grid grid-cols-2 mx-24   text-lg italic ">
        <div className="mx-auto">
          Copyright © 2022 Rishabh Tripathy - All Rights Reserved.
        </div>
        <div className="mx-auto  ">Rishabh Tripathy</div>
      </div>
      <div className="flex text-xl font-semibold  mt-8 gap-6 justify-center">
        <span className="">
          <button className="hover:text-gray-400">Privacy & Policy</button>
        </span>
        <span>
          <button className="hover:text-gray-400">Terms and Condition</button>
        </span>
      </div>
    </div>
  );
}
