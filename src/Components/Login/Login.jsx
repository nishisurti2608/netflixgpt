import React, { useState, useRef } from "react";
import Header from "../Header/Header";
import { addUser } from "../../Utils/userSlice";
import { checkValidData } from "../../Utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../Utils/fiebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const SignUpForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    //validate form Data

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/70151642?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displaName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black w-3/12 my-36 mx-auto left-0 right-0 rounded-md bg-opacity-50"
      >
        <h1 className="font-bold text-4xl text-white py-4 px-4 ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            ref={name}
            placeholder="Enter your name"
            className="p-2 m-2 w-10/12 rounded-md bg-gray-900 focus:outline-none  focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email or phone number"
          className="p-2 m-2 w-10/12 rounded-md bg-gray-900  focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-2 m-2 w-10/12 rounded-md bg-gray-900  focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white"
        />
        <p className="mt-2 m-2 text-sm text-orange-600">{errorMessage}</p>
        <button
          className="flex items-center justify-center p-4 m-3 my-6 bg-red-700 w-10/12 h-12 rounded-md text-white text-center "
          onClick={handleButtonClick}
        >
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
