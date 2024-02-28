import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Videos() {
  const [width, setWidth] = useState("");

  useEffect(() => {
    const innerwidth = window.innerWidth;
    const defaultWidth = 300; 
    const calculatedWidth = innerwidth > 1100 ? innerwidth / 3 : defaultWidth;
    setWidth(calculatedWidth);
  }, []);
  return (
    <div className="relative">
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          delay: 0.2,
        }}
      className="text-5xl font-bold font-logo text-center"
      >
        <h1>Videos</h1>
      </motion.div>
      <div className=" text-center mx-4">
        {/* Card1 */}
        <div className="md:my-12 my-8 flex flex-col justify-around md:flex-row">
          <motion.div
            initial={{
              y: 150,
            }}
            whileInView={{
              y: 0,
            }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            className=" flex overflow-hidden z-10 rounded-xl items-center my-8 md:my-16 justify-center"
          >
            <iframe
              iframe
              width={width}
              height={width * 0.5625}
              src="https://www.youtube.com/embed/41LMXsw740A"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen=""
              
            />
          </motion.div>
          <motion.div
            initial={{
              y: -150,
            }}
            whileInView={{
              y: 0,
            }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            className="flex items-center flex-col gap-8  justify-center"
          >
            <h1 className="text-4xl font-satisfy">Rishabh Original</h1>
            <p className="font-sil  text-xl">
              Groove to some original music composed by Rishabh
            </p>
          </motion.div>
        </div>
        {/* Card 2  */}
        <div className="flex flex-col-reverse justify-around md:flex-row">
          <motion.div
            initial={{
              y: -150,
            }}
            whileInView={{
              y: 0,
            }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            className="flex items-center flex-col gap-8  justify-center"
          >
            <h1 className="text-4xl font-satisfy">Rishabh Cover</h1>
            <p className="font-sil text-xl">
              Check out Rishabh&lsquos take on some of the oldest and biggest
              Bollywood classics !
            </p>
          </motion.div>
          <motion.div
            initial={{
              y: 150,
            }}
            whileInView={{
              y: 0,
            }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            className=" flex  rounded-xl overflow-hidden   items-center my-16 justify-center"
          >
            <iframe
              width={width}
              height={width * 0.5625}
              src="https://www.youtube.com/embed/Ds7AFZwBHOE"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen=""
            />
          </motion.div>
        </div>

        {/* CArd3  */}

        <div className="flex flex-col justify-around md:flex-row">
          <motion.div
            initial={{
              y: 150,
            }}
            whileInView={{
              y: 0,
            }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            className=" flex items-center rounded-xl overflow-hidden my-16 justify-center"
          >
            <iframe
              width={width}
              height={width * 0.5625}
              src="https://www.youtube.com/embed/Bo0yp17DiJw"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen=""
            />
          </motion.div>
          <motion.div
            initial={{
              y: -150,
            }}
            whileInView={{
              y: 0,
            }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            className="grid-cols-1 flex items-center flex-col gap-8  justify-center"
          >
            <h1 className="text-4xl font-satisfy">Rishabh Regional</h1>
            <p className="font-sil text-xl">
              Rishabh spreads his love to every part of the world through hir
              regional renditions.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
