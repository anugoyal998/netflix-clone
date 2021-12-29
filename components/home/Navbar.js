import Image from "next/image";
import React from "react";
import logo from "../../img/netflix-logo-lg.png";
import { IoTriangleSharp } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { signIn } from "next-auth/react";

export default function Navbar() {
  return (
    <div className="flex justify-between items-start px-10 pt-3">
      <div className="w-36 h-32">
        <Image src={logo} alt="" />
      </div>
      <div className="flex items-center space-x-6 pt-2">
        <button className="outline-none focus:outline-none border-white border-2 rounded-sm text-white flex  items-center space-x-1 py-1 px-2 ">
          {" "}
          <BiWorld /> <p>English</p>{" "}
          <IoTriangleSharp className="rotate-180 text-xs mt-1" />{" "}
        </button>
        <button
          className="cursor-pointer outline-none focus:outline-none bg-front border-2 border-front text-white py-1 px-3 font-semibold rounded-md"
          onClick={() =>
            signIn(process.env.GOOGLE_ID, { callbackUrl: "/netflix" })
          }
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
