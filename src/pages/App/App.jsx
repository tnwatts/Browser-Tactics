import { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
// import NewOrderPage from '../NewOrderPage/NewOrderPage';
// import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import Game from './Game';
import Profile from '../../components/Profile/Profile';
import NavBar from '../../components/NavBar/NavBar';
import './App.scss';
import { getProfile } from '../../utilities/users-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  // const [profile, setProfile] = useState();
  
  let profile = useRef(null);
  {if (user){
    profile.current = getProfile(user._id)}
  } 


  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/game' element={<Game user={user} profile={profile}/>} />
            <Route path='/profile' element={<Profile user={user} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
