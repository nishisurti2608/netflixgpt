import React from "react";
import Login from "../Login/Login";
import Browse from "../Browse/Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <div className="bg-black min-h-screen absolute w-full h-screen"></div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
