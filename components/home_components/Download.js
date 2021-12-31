import React from "react";

export default function Download() {
  return (
    <div className="bg-black pb-10 pr-36 flex items-center">
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          alt=""
          className="transform scale-90 hover:scale-100 animation cursor-pointer"
        />
      </div>
      <div>
        <p className="text-5xl font-bold">
          Download your shows to watch offline.
        </p>
        <p className="text-2xl font-semibold mt-5">
          Save your favourites easily and always have something to watch.
        </p>
      </div>
    </div>
  );
}
