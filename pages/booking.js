import React, { useEffect, useState } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Booking() {
  const [mail, setMail] = useState("");
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const notify = () => {
    toast.success("Form Submitted Successfully!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !mail || !phone || !msg) {
      toast.error("Please enter your full name !", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    if (!validateEmail(mail)) {
      toast.error("Please enter a valid email address !", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    if (!validatePhone(phone)) {
      toast.error("Please enter a valid phone number!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      return;
    }

    // Save data to local storage
    const formData = { name, mail, phone, msg };
    localStorage.setItem("bookingFormData", JSON.stringify(formData));

    // Reset form fields
    setName("");
    setMail("");
    setPhone("");
    setMsg("");

    // alert("Form data saved successfully!");
    notify();
    console.table(formData);
  };
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const numericPhone = phone.replace(/\D/g, "");
    return numericPhone.length === 10;
  };

  return (
    <div className="bg-gradient-to-tr  from-[#0e0c0cd1] to-black h-full">
      <Navbar />
      <ToastContainer />

      <div className="py-16 ">
        <h1 className="text-center font-satisfy text-white text-6xl">
          {" "}
          Book for live Concert
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid text-black gap-8 px-8 my-12 grid-cols-1"
        >
          <input
            type="text"
            
            value={name}
            autoComplete="true"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            className="input w-full rounded-xl mx-auto max-w-lg"
          />
          <input
            type="email"
            value={mail}
            autoComplete="true"
            placeholder="Email"
            onChange={(e) => setMail(e.target.value)}
            className="input w-full rounded-xl mx-auto max-w-lg"
          />
          <input
            type="tel"
            value={phone}
            inputMode="numeric"
            autoComplete="true"
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
            className="input w-full rounded-xl mx-auto max-w-lg"
          />
          <input
            type="textbox"
            value={msg}
            autoComplete="true"
            placeholder="Message"
            onChange={(e) => setMsg(e.target.value)}
            className="input w-full rounded-xl mx-auto max-w-lg"
          />
          <button className="bg-white text-black mx-auto px-8 py-2 font-satisfy font-bold text-xl rounded-lg ">
            Book
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
