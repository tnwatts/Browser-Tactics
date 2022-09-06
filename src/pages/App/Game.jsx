import GameBoard from "../../components/GameBoard/GameBoard"; 
import { useState, useEffect } from "react"
import { getUsersGame } from '../../utilities/games-api';
import './App.css';

export default function Match({user}) {
    const [game, setGame] = useState();

    useEffect(function() {
        async function loadGame(id){
            const game = await getUsersGame(id);
            setGame(game);
        }
        loadGame(user._id);
    },[user])
    
    return(
        <div className='game-container'>
            <div>options</div>
            <GameBoard game={game} setGame={setGame}/>
        </div>
    )
}