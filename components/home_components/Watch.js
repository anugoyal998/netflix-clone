import React from "react";

export default function Watch() {
  return (
    <div className="bg-black py-24 px-36 flex items-center">
      <div className="mr-3">
        <p className="font-bold text-5xl">Watch everywhere.</p>
        <p className="font-semibold text-2xl mt-5">
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
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
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}
