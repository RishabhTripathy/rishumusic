import React, { useState } from "react";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Login() {
  const [mail, setMail] = useState("");
  const [pwd, setPwd] = useState("");
  var formdata = new FormData();
  formdata.append("Email", mail);
  formdata.append("Password", pwd);

  return (
    <div className="bg-gradient-to-tr from-[#0e0c0cd1] text-white to-black ">
      <Navbar />

      <div className=" py-12 mx-32 rounded outline outline-double outline-8 outline-offset-4  mt-16">
        <h1 className="text-5xl font-satisfy text-center">Log-in</h1>

        <div className=" text-black my-8  gap-8 grid grid-cols-1">
          <input
            type="email"
            required
            value={mail}
            autoComplete="true"
            placeholder="Email"
            onChange={(e) => setMail(e.target.value)}
            className="input w-full rounded-xl mx-auto max-w-lg"
          />
          <input
            type="password"
            required
            value={pwd}
            placeholder="Password"
            onChange={(e) => setPwd(e.target.value)}
            className="input rounded-xl w-full mx-auto max-w-lg"
          />
          <button
            onSubmit={() => submit()}
            className="bg-black mx-auto  font-semibold text-white hover:border-black rounded-2xl border-white border-2 px-8 py-2 "
          >
            Log In
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
