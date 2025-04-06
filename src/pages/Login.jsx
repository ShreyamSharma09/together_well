import { useState } from 'react';
import videoBg from '../assets/BG_VIDEO.mp4'; 
import { Link } from 'react-router-dom';
import useLogin from '../hooks/useLogin';

function Login() {
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")


  const {loading,login} = useLogin()

  

  const handleSubmit = async(e) => {
    e.preventDefault();
    await login(email,password)
  };

  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover" 
        autoPlay loop muted>
        <source src={videoBg} type="video/mp4" />
      </video>

      {/* Login Form */}
      <div className="relative z-10 w-full max-w-md p-8 text-white shadow-lg rounded-xl border border-white/20 
                      backdrop-blur-md bg-white/25 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
        <h2 className="text-2xl font-bold text-center text-gray-200">Welcome Back</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 text-gray-200">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
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
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg bg-transparent text-white 
                         focus:outline-none focus:ring-2 focus:ring-red-400 placeholder-gray-300"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 transition"
          >
            Log In
          </button>

          <p className="text-sm text-center text-gray-300">
            Don't have an account?{' '}
            <Link to="/signup" className="text-red-400 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;