import Image from "next/image";
import React from "react";
import Footer from "../../components/footer/Footer";
import logo from "../../img/netflix-logo-lg.png";
import { signIn } from "next-auth/react";

export default function index() {
  return (
    <div className="netflix-bg">
      <div className="w-72 h-72 pl-4 pt-5">
        <Image src={logo} alt="" />
      </div>
      <div className="flex justify-center -translate-y-28">
        <div
          className=" p-10 text-white w-[400px] rounded-md"
          style={{ background: "rgba(0,0,0,0.8)" }}
        >
          <p className="text-2xl font-semibold">Sign In</p>
          <div className="flex flex-col space-y-6 mt-3">
            <input
              type="email"
              placeholder="Email"
              className="py-2 px-4 bg-[#333333] w-full rounded-md text-lg outline-none focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="py-2 px-4 bg-[#333333] w-full rounded-md text-lg outline-none focus:outline-none"
            />
          </div>
          <button className="w-full bg-front mt-6 rounded-md py-3 font-semibold text-lg">
            Sign In
          </button>
          <div className="flex items-center justify-center mt-4">
            <hr className="w-full" />
            <p className="h-8 w-8 rounded-full border-2 p-3 flex items-center justify-center mx-2 font-semibold">
              Or
            </p>
            <hr className="w-full" />
          </div>
          <button
            className="w-full border-2 mt-5 text-lg font-semibold py-2 rounded-md"
            onClick={() => signIn(process.env.GOOGLE_ID, { callbackUrl: "/netflix" })}
          >
            Continue with Google
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
