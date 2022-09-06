import "./GameBoard.css"
import "./Token.css"
import Token from "./Token"
import { useState } from "react"
export default function GameBoard() {

    const [board, setBoard] = useState(Array(330).fill(0).map( (a,i) => [i%22, Math.floor(i/22)]) )
    
  
    return(
        <div className="game-board-container">
            <div className="game-board">
            {board.map( function(cell, idx){
                return <div id={`${cell[0]} ${cell[1]}`}   key={idx} className="game-cell"> x: {cell[0]} y: {cell[1]}  </div>
            })}
            <Token />
            </div>
        </div>
    )
}