import "./GameBoard.css"
import "./Token.css"
import Token from "./Token"

import { useState, useEffect } from "react"
import { getUsersGame } from '../../utilities/games-api';
export default function GameBoard({game, setGame}) {

    const [board, setBoard] = useState(Array(330).fill(0).map( (a,i) => [i%22, Math.floor(i/22)]) )
  
    const [pOneTokens, setpOneTokens] = useState()

    
    return(
        <div className="col-8 game-board-container">
            <div className="game-board">
            {board.map( function(cell, idx){
                return <div id={`${cell[0]} ${cell[1]}`}   key={idx} className="game-cell"> x: {cell[0]} y: {cell[1]}  </div>
            })}
            <Token />
            </div>
        </div>
    )
}