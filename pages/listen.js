import Navbar from "./navbar";

import Footer from "./footer";

export default function Listen() {
  const music = [
    {
      id: 1,
      audio: "/audios/agarTum.mp3",
      title: "Agar Tum Mil Jao",
    },
    {
      id: 2,
      audio: "/audios/apkePyar.mp3",
      title: "Apke Pyar Mein",
    },
    {
      id: 3,
      audio: "/audios/Baras.mp3",
      title: "Baras Baras",
    },
    {
      id: 4,
      audio: "/audios/beeteLamhe.mp3",
      title: "Beete Lamhe",
    },
    {
      id: 5,
      audio: "/audios/bheegi.mp3",
      title: "Bheegi bheegi",
    },
    {
      id: 6,
      audio: "/audios/chalaJata.mp3",
      title: "Chala Jaata Hoon",
    },
    {
      id: 7,
      audio: "/audios/honthon.mp3",
      title: "Hothon Se Chhu Lo Tum",
    },
    {
      id: 8,
      audio: "/audios/HoshWaalon.mp3",
      title: "Hosh Waalon Ko",
    },
    {
      id: 9,
      audio: "/audios/DilHaiKe.mp3",
      title: "Dil Hai Ke Maanta Nahi",
    },
    {
      id: 10,
      audio: "/audios/iktara.mp3",
      title: "Iktara (Reprise)",
    },
    {
      id: 11,
      audio: "/audios/kallasohna.mp3",
      title: "Kalla Sona",
    },
    {
      id: 12,
      audio: "/audios/kihonda.mp3",
      title: "Ki Honda Pyar",
    },
    {
      id: 13,
      audio: "/audios/mahi.mp3",
      title: "Maahi",
    },
    {
      id: 14,
      audio: "/audios/paagla.mp3",
      title: "Paagla",
    },
    {
      id: 15,
      audio: "/audios/rabbaoriya.mp3",
      title: "Pal Pal Dil Ke Paas",
    },
    {
      id: 16,
      audio: "/audios/samneyekaun.mp3",
      title: "Saamne Ye Kaun Aaya",
    },
    {
      id: 17,
      audio: "/audios/terafitoor.mp3",
      title: "Tera Fitoor",
    },
    {
      id: 17,
      audio: "/audios/terinaar.mp3",
      title: "Teri Naar",
    },
    {
      id: 17,
      audio: "/audios/toramora.mp3",
      title: "Tora mora Lovestory",
    },
    {
      id: 17,
      audio: "/audios/tumile.mp3",
      title: "Tu Mile Dil Khile",
    },
    {
      id: 17,
      audio: "/audios/yaari.mp3",
      title: "Yaari",
    },
    {
      id: 17,
      audio: "/audios/yaariyan.mp3",
      title: "Yaariyan",
    },
    {
      id: 17,
      audio: "/audios/yeladkaa.mp3",
      title: "Ye Ladka",
    },
  ];
  return (
    <div className="bg-gradient-to-tr from-[#0e0c0cd1] text-white to-black">
      <Navbar />
      <div className=" my-12">
        <h1 className="text-center font-satisfy text-6xl">Rishabh Songs</h1>

        {music.map((e, id) => (
          <div
            key={id}
            className="grid my-24 bg bg-gradient-to-r gap-8 rounded-3xl from-[#b9b9b92f] to-[#b9b9b91c]   md:mx-32 py-24 px-16 md:grid-cols-2"
          >
            <div className="my-auto mx-auto ">
              <h1 className="text-4xl font-sil  underline underline-offset-2">
                {e.title}
              </h1>
              <h2 className="font-satisfy italic font-semibold my-4">
                Listen to {e.title} by Rishabh Tripathy{" "}
              </h2>
            </div>
            <div className="">
              <audio
                className="w-full mx-auto  "
                controls
                src={e.audio}
              ></audio>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
