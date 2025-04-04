import React from 'react'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'

const FamilyInfo = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 pt-24">
      <NavBar />

      <div className="flex w-full px-6">
    <div className="w-3/4 bg-white p-6 rounded shadow">
      
    </div>
        
        <div className="mt-6 bg-white p-6 rounded shadow">
          <h3 className="font-bold mb-2">Create a new team or join an existing one.</h3>
          <input type="text" placeholder="Team Name" className="border w-full p-2 rounded mb-2" />
          <button className="w-full bg-blue-600 text-white p-2 rounded">Create Team</button>
          <div className="text-center my-2 text-gray-500">OR</div>
          <input type="text" placeholder="Team Code" className="border w-full p-2 rounded mb-2" />
          <button className="w-full bg-blue-600 text-white p-2 rounded">Join Team</button>
        </div>
      </div>
    </div>
    
  )
}

export default FamilyInfo;