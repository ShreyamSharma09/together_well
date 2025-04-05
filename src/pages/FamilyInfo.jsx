import React from "react";
import NavBar from "../components/NavBar";
import bgImage from "../assets/familyLookup-v4.png";
import FamilyMemberCard from "./../components/FamilyMember.jsx";

const FamilyInfo = () => {
  return (
    <div className="min-h-screen text-gray-900 pt-24 relative">
      <img
        src={bgImage}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-400"
      />

      <div className="relative z-10">
        <NavBar />

        <div className="flex w-full px-6 mt-6 gap-4">
          {/* Left Section */}
          <div
            className="w-3/4 bg-white p-6 rounded shadow relative z-10 text-white shadow-lg rounded-xl 
            border border-white/20 backdrop-blur-md bg-white/25 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
          >
            <h2 className="text-2xl mb-5">Family Health Dashboard</h2>
            
            {/* Card container with horizontal scroll or wrap */}
            <div className="flex flex-wrap gap-4">
              <FamilyMemberCard
                name="John Doe"
                gender="Male"
                age="25"
                pfp="https://randomuser.me/api/portraits/men/1.jpg"
              />
              <FamilyMemberCard
                name="John Doe"
                gender="Male"
                age="25"
                pfp="https://randomuser.me/api/portraits/men/1.jpg"
              />
              <FamilyMemberCard
                name="John Doe"
                gender="Male"
                age="25"
                pfp="https://randomuser.me/api/portraits/men/1.jpg"
              />
              <FamilyMemberCard
                name="John Doe"
                gender="Male"
                age="25"
                pfp="https://randomuser.me/api/portraits/men/1.jpg"
              />
              <FamilyMemberCard
                name="John Doe"
                gender="Male"
                age="25"
                pfp="https://randomuser.me/api/portraits/men/1.jpg"
              />
              <FamilyMemberCard
                name="John Doe"
                gender="Male"
                age="25"
                pfp="https://randomuser.me/api/portraits/men/1.jpg"
              />
            </div>
          </div>

          {/* Right Section */}
          <div
            className="w-1/4 bg-white p-6 rounded shadow z-10 text-white shadow-lg rounded-xl border 
            border-white/20 backdrop-blur-md bg-white/25 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] h-[40vh]"
          >
            <h3 className="font-bold mb-2">
              Create a new family or join an existing one.
            </h3>
            <input
              type="text"
              placeholder="Team Name"
              className="border w-full p-2 rounded mb-2"
            />
            <button className="w-full bg-red-700 text-white p-2 rounded">
              Create Family
            </button>
            <div className="text-center my-2 text-gray-500">OR</div>
            <input
              type="text"
              placeholder="Team Code"
              className="border w-full p-2 rounded mb-2"
            />
            <button className="w-full bg-red-700 text-white p-2 rounded">
              Join Family
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyInfo;
