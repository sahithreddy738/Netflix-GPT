import React from "react";
import { NETFLIX_BACKGROUND_IMAGE } from "../utils/constants";
import Form from "./Form";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header/>
      <div className="">
        <img
          src={NETFLIX_BACKGROUND_IMAGE}
          alt="netflix-backgroung-img"
          className="fixed -z-10 brightness-50 h-full w-full object-cover md:w-full md:h-full"
        ></img>
      </div>
      <Form></Form>
    </div>
  );
};

export default Login;
