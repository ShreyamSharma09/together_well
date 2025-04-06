import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";


const useLogin = () => {
  const [loading, SetLoading] = useState(false);
  const {setAuthUser} = useAuthContext()

  const login = async (email, password) => {
    
    const success = handleInputError( email, password );
    if (!success) {
      return;
    }
    SetLoading(true)
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("current-user", JSON.stringify(data));
      setAuthUser(data)
      console.log(data)
    } catch (error) {
      toast.error(error.message);
    } finally {
      SetLoading(false)
    }
  };

  return { login, loading };
};

export default useLogin;

const handleInputError = (email, password) => {
  if (!email || !password) {
    toast.error("Enter all fields");
    return false;
  }
  return true;
};