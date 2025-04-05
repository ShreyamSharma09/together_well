import { useState } from 'react';
import videoBg from '../assets/BG_VIDEO.mp4'; 
import { Link } from 'react-router-dom';
import GenderCheckbox from '../components/GenderCheckBox';
import useSignup from '../hooks/useSignup.js';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });

  const handleCheckboxChange = (gender) =>{
    setFormData({...formData,gender})
  }

  const {loading,signup} = useSignup()

  const handleSubmit = async(e) => {
    console.log("inside handler")
    e.preventDefault();
    await signup(formData)

  };

  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover" 
        autoPlay loop muted>
        <source src={videoBg} type="video/mp4" />
      </video>

      {/* Signup Form */}
      <div className="relative z-10 w-full max-w-md p-8 text-white shadow-lg rounded-xl border border-white/20 
                      backdrop-blur-md bg-white/25 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
        <h2 className="text-2xl font-bold text-center text-gray-200">Create Account</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 text-gray-200">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e)=>setFormData({...formData, name: e.target.value})}
              required
              className="w-full px-4 py-2 border rounded-lg bg-transparent text-white 
                         focus:outline-none focus:ring-2 focus:ring-red-400 placeholder-gray-300"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-200">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e)=>setFormData({...formData, email: e.target.value})}
              required
              className="w-full px-4 py-2 border rounded-lg bg-transparent text-white 
                         focus:outline-none focus:ring-2 focus:ring-red-400 placeholder-gray-300"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-200">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={(e)=>setFormData({...formData, password: e.target.value})}
              required
              className="w-full px-4 py-2 border rounded-lg bg-transparent text-white 
                         focus:outline-none focus:ring-2 focus:ring-red-400 placeholder-gray-300"
              placeholder="Enter your password"
            />
          </div>
    
          <div>
            <label className="block mb-1 text-gray-200">Confirm Password</label>
            <input
              type="password"
              name="password"
              value={formData.confirmPassword}
              onChange={(e)=>setFormData({...formData, confirmPassword: e.target.value})}
              required
              className="w-full px-4 py-2 border rounded-lg bg-transparent text-white 
                         focus:outline-none focus:ring-2 focus:ring-red-400 placeholder-gray-300"
              placeholder="Enter your password"
            />
          </div>

          <GenderCheckbox  onCheckboxChange={handleCheckboxChange} selectedGender = {formData.gender}   />

          <button
          onClick={()=>console.log("clicked")}
            type="submit"
            className="w-full bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Sign Up
          </button>

          <p className="text-sm text-center text-gray-300">
            Already have an account?{' '}
            <Link to="/login" className="text-red-400 hover:underline">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;