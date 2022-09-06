import { createGame } from '../../utilities/games-api';
import { useState, useEffect } from "react"
import { getProfile } from '../../utilities/users-api';
import { Link } from 'react-router-dom';

export default function Profile({user}) {
    const [profile,setProfile] = useState({})
    console.log(user._id)

    useEffect(function() {
        console.log(user, 'test')
        async function loadProfile(id){
            const prof = await getProfile(id);
            setProfile(prof);
        }
        loadProfile(user._id);
    },[user])
    
    async function handleNewGame (evt) {
        evt.preventDefault();
        await createGame(user._id);
    }
    


    return(
        <div>

        { (!profile.gameStatus  ) &&  <button onClick={handleNewGame}>NEW GAME</button>}
        <div>Hello {profile.name}</div>
        <div> Game Status: {profile.gameStatus ?  (`You are player ${profile.gameStatus===1 ? 'one' : 'two'}`) : "You are not in a game"}</div>
        <Link to={'/game'}>To Game!</Link>
        <div> Game Record: {profile.wins}/{profile.losses}</div>
        </div>
    )
}