import React from 'react'
import {Route,Routes} from "react-router-dom"
import HomePage from './pages/HomePage'
import Signup from './pages/SignUp'
import Login from './pages/Login'
import FamilyInfo from './pages/FamilyInfo'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/family-lookup" element={<FamilyInfo />} />

    </Routes>
  )
}

export default App