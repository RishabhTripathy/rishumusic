import React, { useState } from "react";
import Footer from "./footer";
import Navbar from "./navbar";


export default function Signup () {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [pwd, setPwd] = useState("");
  var formdata = new FormData();
  formdata.append("Email", mail);
  formdata.append("Password", pwd);
  return (
    <div className="bg-gradient-to-tr from-[#0e0c0cd1] text-white to-black ">
      <Navbar />

      <div className=" py-12 mx-32 rounded outline outline-double outline-8 outline-offset-4  mt-16">
        <h1 className="text-5xl font-satisfy text-center">Sign-Up</h1>

        <div className=" text-black my-8  gap-4 grid grid-cols-1">
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="true"
            placeholder="Full Name"
            className="input w-full rounded-xl mx-auto max-w-lg"
          />
          <input
            type="number"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="true"
            placeholder="Phone "
            className="input w-full rounded-xl mx-auto max-w-lg"
          />
          <input
            type="email"
            required
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            autoComplete="true"
            placeholder="Email"
            className="input w-full rounded-xl mx-auto max-w-lg"
          />
          <input
            type="password"
            required
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            placeholder="Password"
            className="input rounded-xl w-full mx-auto max-w-lg"
          />
          <button
            onSubmit={() => submit()}
            className="bg-black mx-auto  font-semibold text-white hover:border-black rounded-2xl border-white border-2 px-8 py-2 "
          >
            Sign Up
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
