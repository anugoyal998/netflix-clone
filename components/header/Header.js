import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "../../utils/Requests";
import logo from "../../img/netflix-logo-lg.png";
import avatar from "../../img/avatar.png";
import Image from "next/image";
import Link from "next/link";
export default function Header({ userDB }) {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const rsp = await axios.get(requests.fetchTrending);
        setMovie(rsp?.data?.results?.[0]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.93)) ,url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        height: "80vh",
        animation: "moving 10s linear infinite",
      }}
      className="px-3 pt-3"
    >
      <div className="flex justify-between">
        <div className="w-32 h-10">
          <Image src={logo} alt="" />
        </div>
        <div className="flex items-center">
          <input
            type="search"
            placeholder="Search"
            className="text-white py-1 px-3 rounded-sm outline-none focus:outline-none mr-4"
            style={{ background: "rgba(0,0,0,0.7)" }}
          />
          <Link href="/profile">
            <a>
              <div className="w-10 h-10">
                <Image src={avatar} alt="" className="rounded-full" />
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div className="px-2 w-1/2 mt-32">
        <p className="text-white font-bold text-4xl">{movie?.original_title}</p>
        <div className="flex space-x-4 my-3">
          <button
            className="text-white py-2 px-10 rounded-sm font-semibold"
            style={{ background: "rgba(0,0,0,0.5)" }}
            onClick={() =>
              userDB?.subscribed ? alert("Play") : alert("Subscribe to Play")
            }
          >
            Play
          </button>
          <button
            className="text-white py-2 px-10 rounded-sm font-semibold"
            style={{ background: "rgba(0,0,0,0.5)" }}
          >
            My List
          </button>
        </div>
        <p className="text-white font-semibold">{movie?.overview}</p>
      </div>
      {/* <div className="mt-20">&nbsp;</div> */}
    </div>
  );
}
