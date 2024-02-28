import Image from "next/image";
import Navbar from "./navbar";
import rishu from "../public/rishabh.jpg";
import { useRouter } from "next/router";
import Link from "next/link";
import Aboutme from "./aboutme";
import Videos from "./videos";
import PhotoGallary from "./photogallary";
import Footer from "./footer";
import Sliders from "./slider";
import { motion } from "framer-motion";

export default function HomePage() {
  const router = useRouter();
  return (
    <div className="bg-gradient-to-tr  text-white  from-[#0e0c0cdf] to-black h-full">
      <Navbar />
      <div className="">
   
        <div className="grid grid-cols-1 relative gap-8 md:gap-0 md:grid-cols-2 md:m-14 p-4 md:p-12  rounded-xl ">
        
          <div className="grid-cols-1 flex justify-center">
            <motion.div
              initial={{ x: -100 }}
              animate={{
                x: 0,

                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
              }}
              className=""
            >
              <Image
                src={rishu}
                alt="Picture of Rishabh"
                width={500}
                height={500}
                priority
                className="rounded-3xl aspect-[5/6] lg:aspect-square object-cover"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ y: -180 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              stiffness: 120,
              duration: 1,
            }}
            className="grid-cols-1 flex flex-col gap-6 items-center justify-center"
          >
            <h1 className="md:text-6xl text-3xl text-center font-extrabold font-satisfy">
              I Am Rishabh Tripathy.
            </h1>

            <div className="flex flex-row  gap-4">
              <motion.button
                whileHover={{
                  scale: 1.1,
                  color: "#f8e112",
                }}
                className="border-2 hover:text-black hover:bg-white font-bold font-logo bg-transparent tracking-wider duration-100  md:text-2xl py-2 px-8 rounded-full"
              >
                <Link
                  target={"_blank"}
                  href="https://open.spotify.com/artist/7qX8hjjJsWMPPlzN0qHqny?autoplay=true"
                >
                  Listen Now
                </Link>
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.1,
                  color: "#f8e112",
                }}
                className="border-2 hover:text-black hover:bg-white font-bold font-logo bg-transparent tracking-wider duration-100  md:text-2xl py-2 px-8 rounded-full"
              >
                <Link
                  target={"_blank"}
                  href="https://www.instagram.com/rish_you"
                >
                  Follow Me
                </Link>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
      <Aboutme />
      <Videos />
      <PhotoGallary />

      <Sliders />
      <Footer />
    </div>
  );
}
