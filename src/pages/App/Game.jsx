import GameBoard from "../../components/GameBoard/GameBoard"; 
import StatusWindow from "../../components/StatusWindow/StatusWindow";
import Token from "../../components/GameBoard/Token";
import { useState, useEffect,useRef} from "react"
import { getUsersGame } from '../../utilities/games-api';
import { getUsersList } from "../../utilities/archetypes-api";
import { getProfile } from "../../utilities/users-api";
import { updateBoardState} from "../../utilities/games-api";
import './App.scss';

export default function Match({user}) {
    const [game, setGame] = useState();
    const [profile, setProfile] = useState({});

    useEffect(function() {
        async function loadGame(id){
            const g = await getUsersGame(id);
            const p = await getProfile(id)
            setGame(g);
            setProfile(p)
        }
        loadGame(user._id);
    },[user])
    // console.log(game, usersUnits)
   
    async function startGame(){
        let gameCup = {...game}
        gameCup.phase = 1
        gameCup.turn = 1
        let gameHolder = await updateBoardState(gameCup._id, gameCup)
        setGame(gameHolder)
    }
    async function deleteGame(gameId){
        // await deleteGameEntry(gameId)
    }
    // useEffect(function(){
      
    // },[user._id])
    //[game.players[0]] 


    // console.log(game.players[0].id)
    // console.log(game.players[0]._id)

    return(

        
        <div className="mt-3 container d-flex container-fluid shadow-lg rounded-pill lighten-area justify-content-center">
            {game ?
            <>
            
            <StatusWindow game={game} setGame={setGame} 
            user={user} startGame={startGame}/>
            <GameBoard  user={user} game={game} setGame={setGame}/>
            </>
            :
            <div className="col-8 light-background  m-5 p-5 border border-3 border-infor rounded-pill">

            You are not in a game
            </div>
            }
           
        
        
        </div>
    )
}