import React from "react";
import NavBar from "../components/NavBar";
import FamilyMemberCard from "./../components/FamilyMember.jsx";

const FamilyInfo = () => {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-[#FEECEF] via-[#F8E6F9] to-[#FDFBFF] text-gray-900">
      <NavBar />

      <div className="flex w-full px-6 mt-6 justify-center">
        <div
          className="w-full max-w-6xl bg-white/30 backdrop-blur-lg border border-white/20 
          rounded-3xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)]"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            👨‍👩‍👧‍👦 Family Health Dashboard
          </h2>

          {/* Cards container */}
          <div className="flex flex-wrap gap-6 justify-center">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-200 rounded-2xl"
              >
                <FamilyMemberCard
                  name="John Doe"
                  gender="Male"
                  age="25"
                  pfp={`https://randomuser.me/api/portraits/men/${index + 1}.jpg`}
                />

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyInfo;