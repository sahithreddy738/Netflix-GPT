import React from "react";
import { NETFLIX_PLAY_ICON } from "../utils/constants";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" absolute pt-40 h-full text-white  bg-gradient-to-r from-black">
      <div className="w-4/12 pl-10 flex flex-col space-y-6">
        <h1 className="font-bold text-4xl">{title}</h1>
        <p className="">{overview}</p>
        <div className="flex flex-row space-x-2">
          <button className="rounded-sm px-4 py-2 font-semibold bg-white text-black hover:opacity-80">
            <div className="flex flex-row">
              <img
                className="w-4"
                src={NETFLIX_PLAY_ICON}
                alt="play-icon"
              ></img>
              Play
            </div>
          </button>
          <button className="px-4 py-2 font-semibold bg-gray-400 text-black rounded-sm hover:opacity-80">More info</button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
