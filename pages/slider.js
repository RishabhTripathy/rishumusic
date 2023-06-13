import Slider from "react-slick";

import Link from "next/link";
import { FiInstagram } from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaItunesNote } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";
import { RiSpotifyLine } from "react-icons/ri";
import { SiShazam } from "react-icons/si";
import { motion } from "framer-motion";

export default function Sliders() {
  const links = [
    {
      id: 1,
      link: "https://www.instagram.com/rish_you/",
      name: "Instagram",

      icon: (
        <>
          <FiInstagram size={30} />
        </>
      ),
    },
    {
      id: 2,
      link: "https://www.facebook.com/rishyouu",
      name: "Facebook",
      icon: (
        <>
          <BsFacebook size={30} />
        </>
      ),
    },
    {
      id: 3,
      link: "https://twitter.com/_Rish_Abh",
      name: "Twitter",
      icon: (
        <>
          <BsTwitter size={30} />
        </>
      ),
    },
    {
      id: 4,
      link: "https://youtube.com/@rish_you",
      name: "Youtube",
      icon: (
        <>
          <ImYoutube2 size={30} />
        </>
      ),
    },
    {
      id: 5,
      link: "https://open.spotify.com/artist/7qX8hjjJsWMPPlzN0qHqny",
      name: "Spotify",
      icon: (
        <>
          <RiSpotifyLine size={30} />
        </>
      ),
    },
    {
      id: 6,
      link: "https://music.apple.com/in/artist/rishabh-tripathy/1448180656",
      name: "Apple Music",
      icon: (
        <>
          <FaItunesNote size={30} />
        </>
      ),
    },
    {
      id: 7,
      link: "https://www.shazam.com/artist/rishabh-tripathy/1448180656",
      name: "Shazam",
      icon: (
        <>
          <SiShazam size={30} />
        </>
      ),
    },
    {
      id: 8,
      link: "https://music.amazon.com/artists/B0936XNTFW/rishabh-tripathy",
      name: "Amazon Music",
      icon: (
        <>
          <FaAmazon size={30} />
        </>
      ),
    },
  ];
  var settings = {
    cssEase: "linear",
    dots: false,
    arrows: false,
    autoplaySpeed: 1000,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className=" text-white my-8   md:mx-16  text-center ">
      <motion.h2    initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          delay: 0.2,
        }} className="text-5xl font-satisfy "> Social Links</motion.h2>
      <Slider {...settings}>
        {links.map((item, id) => (
          <div className="my-12 py-8 px-8  font-sil text-2xl" key={id}>
            <Link
              href={item.link}
              className="flex items-center  justify-center gap-4"
            >
              <div className="">{item.icon}</div>
              <div className="">
                <h3 className="hover:underline hidden md:block ">
                  {item.name}
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
