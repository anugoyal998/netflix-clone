import Image from "next/image";
import React from "react";
import Footer from "../../components/footer/Footer";
import logo from "../../img/netflix-logo-lg.png";
import Link from "next/link";

export default function index() {
  return (
    <div className="netflix-bg h-screen">
      <div className="w-72 h-72 pl-4 pt-5">
        <Image src={logo} alt="" />
      </div>
      <div className="flex justify-center -translate-y-28">
        <div
          className=" p-10 text-white w-[400px] rounded-sm"
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
          <button className="w-full bg-front mt-12 rounded-md py-3 font-semibold text-lg">
            Sign In
          </button>
          <p className="mt-4"><span className="opacity-70">New to Netflix ?</span> <Link href="/signup"><a>Sign up now</a></Link></p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
