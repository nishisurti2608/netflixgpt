import React, { useState } from "react";
import Header from "../Header/Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const SignUpForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="brightness-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/61a0a143-542c-45d3-993a-e34e9e5829dd/CA-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="netflix-login-bg"
        />
      </div>
      <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto left-0 right-0 rounded-md bg-opacity-50">
        <h1 className="font-bold text-4xl text-white py-4 px-4 ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-2 m-2 w-10/12 rounded-md bg-gray-900"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-10/12 rounded-md bg-gray-900"
        />
        <button className="flex items-center justify-center p-4 m-3 my-6 bg-red-700 w-10/12 h-12 rounded-md text-white text-center">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <input
          type="checkbox"
          className="absolute h-4 w-4 accent-gray-700  bg-grey-700 mx-4 rounded cursor-pointer "
        />
        <span className="text-sm font-normal text-gray-400 mx-10 flex">
          Remember me
          <span className=" text-sm font-normal text-gray-400  ml-28 cursor-pointer hover:underline flex">
            Need help?
          </span>
        </span>
        <span className=" text-sm font-normal text-gray-500  mx-4 flex my-10  ">
          {isSignIn ? "New to Netflix?" : "Already a user?"}

          <span
            className=" text-md font-semibold text-gray-300 ml-3  cursor-pointer hover:underline "
            onClick={SignUpForm}
          >
            {isSignIn ? "Sign up now." : "  Sign in now."}
          </span>
        </span>
      </form>
    </div>
  );
};

export default Login;
