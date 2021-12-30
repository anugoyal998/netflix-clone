import Image from "next/image";
import React from "react";
import logo from "../img/netflix-logo-lg.png";

export default function Carousel() {
  return (
    <div className="carousel rounded-box bg-white">
      <div className="carousel-item">
        <Image src={logo} alt="" />
      </div>
      <div className="carousel-item">
        <Image src={logo} alt="" />
      </div>
      <div className="carousel-item">
        <Image src={logo} alt="" />
      </div>
      <div className="carousel-item">
        <Image src={logo} alt="" />
      </div>
      <div className="carousel-item">
        <Image src={logo} alt="" />
      </div>
      <div className="carousel-item">
        <Image src={logo} alt="" />
      </div>
      <div className="carousel-item">
        <Image src={logo} alt="" />
      </div>
    </div>
  );
}
