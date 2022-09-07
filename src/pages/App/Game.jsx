import GameBoard from "../../components/GameBoard/GameBoard"; 
import StatusWindow from "../../components/StatusWindow/StatusWindow";
import { useState, useEffect } from "react"
import { getUsersGame } from '../../utilities/games-api';
import './App.scss';

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
        <div className='col-10 mx-auto'>
            <GameBoard  game={game} setGame={setGame}/>
            <StatusWindow game={game}/>
        </div>
    )
}