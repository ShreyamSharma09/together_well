import React from 'react'
import logo from "../assets/TOGETHERWELL_LOGO_FIN_V4.png";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header className="fixed top-0 left-0 w-full p-10 text-white flex items-center justify-between z-99 items-center">
        <img src={logo} alt="Logo" className="h-16 w-auto" />

        <nav className="flex space-x-5 text-lg items-center">
          <Link to="/scan" className="hover:text-gray-300">
            Scan
          </Link>
          <Link to="/track" className="hover:text-gray-300">
            Track
          </Link>
          <Link to="/first-aid" className="hover:text-gray-300">
            First Aid
          </Link>
          <Link to="/checkfam" className="hover:text-gray-300">
            Check Fam
          </Link>
          <Link to="/login" className="py-1 px-3 overflow-hidden bg-red-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            Log In
          </Link>
          <Link to={"/signup"} className="py-1 px-3 overflow-hidden bg-red-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            Sign Up
          </Link>
        </nav>
      </header>
  )
}

export default NavBar