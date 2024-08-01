import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" absolute w-full h-full text-white  bg-gradient-to-r from-black pt-[85%] sm:pt-[45%] md:pt-40">
      <div className="flex flex-col w-6/12 pl-4 space-y-6  md:w-4/12 md:pl-10 md:space-y-6">
        <h1 className="font-bold text-2xl md:text-4xl">{title}</h1>
        <p className="hidden sm:inline-block md:inline-block">{overview}</p>
        <div className="flex flex-row space-x-2 text-black">
          <button className="rounded-md px-4 py-2 font-semibold bg-white hover:opacity-80">
            <div className="flex flex-row">
              <img
                className="w-4"
                src={`Netflix_play_icon.gif`}
                alt="play-icon"
              ></img>
              Play
            </div>
          </button>
          <button className="px-4 py-2 font-semibold bg-gray-400 rounded-md hover:opacity-80">More info</button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
