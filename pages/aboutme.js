import React, { useState } from "react";
import Image from "next/image";
import profile from "../public/img5.jpg";
import { motion } from "framer-motion";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
export default function Aboutme() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
    <div className="h-full my-8 md:my-16  flex flex-col gap-12 items-center justify-center">
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
        className="text-6xl   font-sil font-bold"
      >
        About Me
      </motion.h1>
      <div>
        <Image
          src={profile}
          alt="Picture of the author"
          width={400}
          height={400}
          className="rounded-3xl px-4 aspect-[4/5]"
        />
      </div>

      <p className=" mx-4   md:px-16 font-satisfy text-2xl">
        Introducing Rishabh Tripathy, an exceptional singer, lyricist, composer,
        and skilled musician proficient in guitar and music production. With
        their captivating voice and profound songwriting abilities, Rishabh
        Tripathyhas the unique ability to create musical landscapes that
        resonate deeply with listeners. Their expertise in guitar and music
        production brings an added dimension to their compositions, showcasing
        their versatility and creativity. From heartfelt ballads to infectious
        melodies, Rishabh Tripathy crafts songs that leave a lasting impact.
        Prepare to be swept away by the extraordinary talent of Rishabh
        Tripathy, a true artist whose music speaks to the soul.
      </p>
    </div>
  );
}
``;
