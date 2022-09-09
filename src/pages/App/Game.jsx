import GameBoard from "../../components/GameBoard/GameBoard"; 
import StatusWindow from "../../components/StatusWindow/StatusWindow";
import Token from "../../components/GameBoard/Token";
import { useState, useEffect } from "react"
import { getUsersGame } from '../../utilities/games-api';
import { getUsersList } from "../../utilities/archetypes-api";
import { getProfile } from "../../utilities/users-api";
import './App.scss';

export default function Match({user}) {
    const [game, setGame] = useState();
    const [usersUnits, setUsersUnits] = useState();
    const [profile, setProfile] = useState({});

    useEffect(function() {
        async function loadGame(id){
            const g = await getUsersGame(id);
            const units = await getUsersList(id); 
            const p = await getProfile(id)
            setGame(g);
            setUsersUnits(units);
            setProfile(p)
        }
        loadGame(user._id);
    },[user])
    // console.log(game, usersUnits)
    if (usersUnits){
        if(usersUnits.length < 1){
        console.log('test')
        setUsersUnits(null)
    }}

    
    // useEffect(function(){
      
    // },[user._id])
    //[game.players[0]] 


    console.log(usersUnits)
    // console.log(game.players[0].id)
    // console.log(game.players[0]._id)

    return(
        <div className='col-10 mx-auto'>
            { game && usersUnits.length > 0 ?
            <>
            <GameBoard  game={game} setGame={setGame}/>
            <StatusWindow game={game} setGame={setGame} usersUnits={usersUnits} setUsersUnits={setUsersUnits} user={user}/>
            </>
            :
            "no current game"
        }
        
        </div>
    )
}