import React from "react";
import Header from "../Header/Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div>
        <img
          className="hidden sm:block absolute w-full h-full object-cover opacity-30"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/2c17db1a-f126-40bd-b221-2b0621a73467/CA-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />

        <form className="w-[40%] absolute p-12 bg-black my-28 mx-auto right-0 left-0 text-white rounded-xl bg-opacity-60">
          <h1 className="font-bold text-3xl p-2">Sign In</h1>
          <input
            type="text"
            placeholder="Email Address"
            className="p-2 m-2  w-full bg-slate-700 rounded-lg"
          />
          <input
            type="text"
            placeholder="Password"
            className="p-2 m-2 w-full  bg-slate-700 rounded-lg"
          />
          <button className="p-2 m-2 bg-red-700 w-full rounded-lg">
            Sign In
          </button>
          <p className="p-2 m-2 text-sm">New to Netflix? Sign up now.</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
