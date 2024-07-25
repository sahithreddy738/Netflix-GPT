import React from "react";
import { NETFLIX_BACKGROUND_IMAGE } from "../utils/constants";
import Form from "./Form";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header/>
      <div>
        <img
          src={NETFLIX_BACKGROUND_IMAGE}
          alt="netflix-backgroung-img"
          className="brightness-50"
        ></img>
      </div>
      <Form></Form>
    </div>
  );
};

export default Login;
