import React from "react";

const FamilyMemberCard = ({ name, gender, age, pfp }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 flex items-center space-x-4 w-80 gap-4">
      
      <div className="w-18 h-16">
        <img
          src={pfp || "https://via.placeholder.com/150"}
          alt="Profile"
          className="w-full h-full object-cover rounded-full border"
        />
      </div>

      {/* User Info */}
      <div>
        <h2 className="font-bold text-gray-800 text-lg">{name}</h2>
        <p className="text-gray-600">Gender: {gender}</p>
        <p className="text-gray-600">Age: {age}</p>
      </div>
    </div>
  );
};

export default FamilyMemberCard;