import { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import { seed } from '../../utilities/archetypes-api';
import AuthPage from '../AuthPage/AuthPage';
import Game from './Game';
import Profile from '../../components/Profile/Profile';
import NavBar from '../../components/NavBar/NavBar';
import './App.scss';

export default function App() {
  const [user, setUser] = useState(getUser());

  
  return (
    <main className="App darker-background">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/game' element={<Game user={user}/>} />
            <Route path='/profile' element={<Profile user={user} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
      {/* <button className="btn dark-background text-warning  btn-outline-warning" onClick={seed} >SEED(DANGEROUS)</button> */}
    </main>
  );
}
