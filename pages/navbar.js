import { useRouter } from "next/router";
import { BiUser } from "react-icons/bi";
import { motion } from "framer-motion";

export default function Nav() {
  const router = useRouter();
  const navItems = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Listen",
      link: "listen",
    },
    {
      id: 3,
      name: "Contact",
      link: "booking",
    },

  ];
  return (
    <div className="navbar text-white shadow-sm shadow-[#121a5588] bg-transparent">
      {/* mobile  */}
      <div className="navbar-start w-full">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu  menu-compact dropdown-content mt-3 p-2   shadow bg-white text-black bg-opacity-95 rounded-box w-52"
          >
            {navItems.map((items, id) => (
              <li
                className="cursor-pointer hover:underline underline-offset-4 my-4 tracking-wider font-satisfy font-bold text-7xl "
                onClick={() => router.push(`${items.link}`)}
                key={id}
              >
                <a className="">{items.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <motion.div
          animate={{ y: 0 }}
          initial={{ y: -50 }}
          transition={{
            delay:0.2,
            duration: 1,
            type:"spring",
            stiffness:100
            
          }}
          className=" rotate-[-3deg]  md:ml-12   text-center tracking-widest  py-4 "
        >
          <a className=" cursor-pointer  italic   font-logo   md:text-3xl font-bold">
            Rishabh Music
          </a>
        </motion.div>
      </div>

      {/* PC  */}
      <motion.div
        animate={{ y: 0 }}
        initial={{ y: -50 }}
        transition={{
          delay:0.2,
            duration: 1,
            type:"spring",
            stiffness:100
        }}
        className=" navbar-end    hidden   lg:flex"
      >
        <ul className="menu menu-horizontal px-1">
          {navItems.map((items, id) => (
            <li
              className="cursor-pointer mx-8 hover:underline underline-offset-4 tracking-wider font-satisfy font-bold text-3xl"
              onClick={() => router.push(`${items.link}`)}
              key={id}
            >
              <a className="bg-transparent">{items.name}</a>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* USER  */}
      {/* <div className="navbar-end mx-4">
        <div className="dropdown  my-auto  dropdown-left">
          <label
            tabIndex={0}
            className="cursor-pointer hover:text-gray-600 duration-100 "
          >
            <BiUser size={32} />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content font-satisfy font-bold bg-[#3b3b3be8] menu p-2 shadow  rounded-box w-52"
          >
            <li
              onClick={() => router.push("login")}
              className="hover:underline underline-offset-4"
            >
              <a className="bg-transparent">Log In</a>
            </li>
            <li
              onClick={() => router.push("signup")}
              className="hover:underline underline-offset-4"
            >
              <a className="bg-transparent">Sign Up</a>
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
}
