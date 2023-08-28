import React from "react";
import img6 from "../public/img1.jpg";
import img7 from "../public/img2.jpg";
import img5 from "../public/img3.jpg";
import img9 from "../public/img4.jpg";
import img3 from "../public/rishabh.jpg";
import img1 from "../public/fun.jpg";
import img2 from "../public/img7.jpg";
import img8 from "../public/img8.jpg";
import img4 from "../public/img9.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PhotoGallary() {
  const pics = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
    {
      id: 4,
      img: img4,
    },
    {
      id: 5,
      img: img5,
    },
    {
      id: 6,
      img: img6,
    },
    {
      id: 7,
      img: img7,
    },
    {
      id: 8,
      img: img8,
    },
    {
      id: 9,
      img: img9,
    },
  ];
  return (
    <div className="my-16   h-full">
 
      <motion.h1
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          delay: 0.2,
        }}
        className="text-5xl font-bold font-satisfy text-center"
      >
        Photo Gallery
      </motion.h1>
   
      <div className="grid gap-8 px-4  md:px-32 my-16 grid-cols-2 md:grid-cols-3">
        {pics.map((e, id) => (
          <div key={id} className="rounded-3xl overflow-hidden ">
            <Image
              src={e.img}
              alt=""
              width={400}
              height={400}
              className=" object-cover hover:scale-105 duration-500 aspect-square"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
