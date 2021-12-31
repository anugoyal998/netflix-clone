import React from "react";

export default function EnjoyTV() {
  return (
    <div className="bg-black py-24 px-36 flex items-center">
      <div className="">
        <p className="font-bold text-5xl">Enjoy on your TV.</p>
        <p className="font-semibold text-2xl mt-5">
          Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
          players and more.
        </p>
      </div>
      <div>
        <video
          autoPlay
          playsinline
          muted
          loop
          className="rounded-md transform hover:scale-110 animation cursor-pointer"
        >
          <source
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}
