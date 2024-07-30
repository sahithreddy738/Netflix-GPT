import React, { useRef } from "react";
import { useSelector } from "react-redux";
import languageWords from "../utils/languageConstants";
import openai from "../utils/aiConfig";

const GptSearchBar = () => {
  const language = useSelector((store) => store.appConfig.language);
  const inputRef = useRef(null);
  const handleSearchClick = async () => {
    const gptQuery="Act as Movie Recommendation system and suggest popular movies for the query:" +
            inputRef.current.value +  ".only give me names of 5 movies, each movie separated by comma as example given ahead.Example-kalki,bahubali,pushpa,sahoo,dunki";
    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content:gptQuery
        },
      ],
      model: "gpt-3.5-turbo-0125",
    });
    console.log(chatCompletion.choices);
  };
  return (
    <div className="w-[45%] flex flex-row space-x-4 p-4 bg-black bg-opacity-50 absolute top-20 left-96">
      <input
        className=" w-[78%]  px-4 py-2 rounded-md "
        placeholder={languageWords[language].gptPlaceholder}
        ref={inputRef}
      ></input>
      <button
        onClick={handleSearchClick}
        className="w-[22%] px-4 py-2 rounded-md bg-red-600 text-white cursor-pointer"
      >
        {languageWords[language].search}
      </button>
    </div>
  );
};

export default GptSearchBar;
