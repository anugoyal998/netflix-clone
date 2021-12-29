import React from "react";
import Content from "./Content";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="netflix-bg w-screen h-screen">
      <Navbar/>
      <Content/>
    </div>
  );
}
