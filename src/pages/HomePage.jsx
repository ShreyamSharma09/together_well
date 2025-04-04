import React from "react";

import bg from "../assets/BG_VIDEO.mp4";
import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video
        src={bg}
        className="absolute top-0 left-0 h-screen w-screen object-cover z-0"
        autoPlay
        loop
        muted
      ></video>

    <NavBar />

      <div className="relative flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold">
          Your Health, Your Journey — Track, Improve, Thrive.
        </h1>
        <h2 className="text-white text-2xl md:text-xl mt-4  mt-15">
          Individual health tracking with their Family members.
        </h2>
        <form className="mt-8 w-full max-w-md">
          <div>
            <input
              type="text"
              name="chat"
              className="w-full px-4 py-2 border bg-white text-red-900 
                         focus:outline-none focus:ring-2 focus:ring-red-400 placeholder-gray-600"
              placeholder="Talk to Med Cat !"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
