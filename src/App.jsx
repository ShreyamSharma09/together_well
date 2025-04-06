import React from 'react';
import { Route, Routes , Navigate} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import FamilyInfo from './pages/FamilyInfo';
import ScanReport from './pages/ScanReport';
import TrackDisease from './pages/TrackDisease';
import Scanned from './pages/Scanned'; // ✅ new import
import { useAuthContext } from './context/AuthContext';
import Profile from './pages/Profile';


const App = () => {
  const {authUser} = useAuthContext()
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={authUser ? <Navigate to={"/login"}/> : <Signup />  } />
      <Route path="/login" element={authUser ? <Navigate to={"/"} /> : <Login/>} />
      <Route path="/family-lookup" element={<FamilyInfo />} />
      <Route path="/scan" element={<ScanReport />} />
      <Route path="/track" element={<TrackDisease />} />
      <Route path="/scan-result" element={<Scanned />} /> 
      <Route path='/profile' element={<Profile />} />
    </Routes>
  );
};

export default App;