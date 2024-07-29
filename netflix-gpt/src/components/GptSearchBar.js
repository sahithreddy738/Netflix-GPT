import React from "react";
import { useSelector } from "react-redux";
import languageWords from "../utils/languageConstants";

const GptSearchBar = () => {
    const language=useSelector((store)=>store.appConfig.language);
  return (
    <div className="w-[45%] flex flex-row space-x-4 p-4 bg-black bg-opacity-50 absolute top-20 left-96">
      <input
        className=" w-[78%]  px-4 py-2 rounded-md "
        placeholder={languageWords[language].gptPlaceholder}
      ></input>
      <button className="w-[22%] px-4 py-2 rounded-md bg-red-600 text-white cursor-pointer">
        {languageWords[language].search}
      </button>
    </div>
  );
};

export default GptSearchBar;
