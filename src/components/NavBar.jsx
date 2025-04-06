import React, { useState,useRef,useEffect } from 'react';
import logo from "../assets/TOGETHERWELL_LOGO_FIN_V4.png";
import profileImg from "../assets/FIN_BG.png"; // replace with your profile pic
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  const {authUser} = useAuthContext()
  console.log(authUser)

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full px-10 py-4 text-gray-800 flex items-center justify-between z-50 backdrop-blur-md bg-white/30 shadow-md">
      
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </Link>

      <nav className="flex space-x-6 text-lg items-center">
        <Link to="/scan" className="hover:text-red-600 transition-colors duration-200">
          Scan
        </Link>
        <Link to="/track" className="hover:text-red-600 transition-colors duration-200">
          Track
        </Link>
        <Link to="/first-aid" className="hover:text-red-600 transition-colors duration-200">
          First Aid
        </Link>
        <Link to="/family-lookup" className="hover:text-red-600 transition-colors duration-200">
          Check Fam
        </Link>

        {/* Profile Dropdown */}
        <div className="relative ml-4" ref={dropdownRef}>
      <img
        src={authUser.pfp}
        alt="Profile"
        className="h-10 w-10 rounded-full border border-white shadow-md cursor-pointer"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      />
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 z-50">
          <Link
            to="/profile"
            className="block px-4 py-2 text-gray-700 hover:bg-pink-100 transition"
          >
            Create Family
          </Link>
          <Link
            to="/settings"
            className="block px-4 py-2 text-gray-700 hover:bg-pink-100 transition"
          >
            Join Family
          </Link>
          <Link
            to="/profile"
            className="block px-4 py-2 text-gray-700 hover:bg-pink-100 transition"
          >
            Profile
          </Link>
          <Link
            to="/logout"
            className="block px-4 py-2 text-red-700 hover:bg-pink-100 transition"
          >
            Logout
          </Link>
        </div>
      )}
    </div>
      </nav>
    </header>
  );
};

export default NavBar;