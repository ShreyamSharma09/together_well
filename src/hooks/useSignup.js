import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";


const useSignup = () => {
  const [loading, setLoading] = useState(false);
  

  const signup = async ({
    name,
    email,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputError({
      name,
      email,
      password,
      confirmPassword,
      gender,
    });
    if (!success) {
      return;
    }

    setLoading(true);

    try {
        console.log("inside hook")
      const response = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await response.json();
      console.log(data)
      if(data.error){
        throw new Error(data.error)
      }
      
      localStorage.setItem("current-user", JSON.stringify(data))
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return {loading,signup}
};

export default useSignup;

function handleInputError({
  name,
  email,
  password,
  confirmPassword,
  gender,
}) {
  if (!name || !email || !password || !confirmPassword || !gender) {
    toast.error("Enter all fields");
    return false;
  }

  if (!password || !confirmPassword) {
    toast.error("Passwords don't match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be longer than 6 characters");
    return false;
  }

  return true;
}