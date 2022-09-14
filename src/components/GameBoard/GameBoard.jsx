import "./GameBoard.css";
import "./Token.css";
import Token from "./Token";
import GameControls from "../../components/GameControls/GameControls";
import { updateBoardState } from "../../utilities/games-api";
import { useState, useEffect, useRef } from "react";
import { deleteGameEntry } from "../../utilities/games-api";
import { useNavigate } from "react-router-dom";
export default function GameBoard({ game, setGame, user }) {
  const [xy, setXY] = useState([1,1])
  const [target, setTarget] = useState(false)
  const [board, setBoard] = useState(
    Array(330)
      .fill(0)
      .map((a, i) => [i % 22, Math.floor(i / 22)])
  );


  let navigate = useNavigate();
  const boardPos = useRef();
  const boardCells = useRef(new Array());

  function XYpos(arr) {
    let xPos = boardPos.current.offsetLeft + 3 + arr[0] * 40.6;
    let yPos = boardPos.current.offsetTop + 3 + arr[1] * 40.6;
    return [xPos, yPos];
  }

  function handleClick(evt, cell){
    setXY([cell[0],cell[1]])
  }
  function handleIconClick(unit){
    setTarget(unit)
   
  }

 async function moveTo(id){
    let unitIdx = Math.floor((game.turn % 6) / 2)
    let gameCup = { ...game };
    if (Math.floor(game.turn%2) ===0) {gameCup.p1.units[unitIdx].pos = xy}
    if (Math.floor(game.turn%2) ===1) {gameCup.p2.units[unitIdx].pos = xy}
    gameCup.turn = game.turn+1
    let gameHolder = await updateBoardState(gameCup._id, gameCup);
    setGame(gameHolder)
  }


  async function meleeAttack() {
    target.injuries += 20
    let gameCup = { ...game };
    console.log(gameCup)
    setGame(gameCup)
    let gameHolder = await updateBoardState(gameCup._id, gameCup);
  }

  async function endGame() {
    let gameCup = { ...game };
    console.log(gameCup)
    await deleteGameEntry(gameCup._id)
    navigate('/Profile', { replace: true })
  }


  return (
    <div className="game-board-container lighten-area border border-3 border-info border mt-2 rounded-5 ps-3 py-2 dark-background">
      <GameControls
        game={game}
        setGame={setGame}
        XYpos={XYpos}
        endGame={endGame}
        xy={xy}
        moveTo={moveTo}
        meleeAttack={meleeAttack}
        user={user}
      />

      <div
        ref={boardPos}
        className="game-board border-2 m-1 ms-3 mx-4 "
      >
        {board.map(function (cell, idx) {
          return (
            <div
              id={idx}
              ref={(el) => {
                boardCells.current.push(el);
              }}
              key={idx} 
              className={`game-cell ${cell[0]==xy[0] && cell[1]==xy[1]? "highlight" : "" }`}
              onClick={(evt)=> handleClick(evt,cell)}
            >
             
            </div>
          );
        })}

        {game.p1.units.map(
          (u, idx) =>
            boardPos.current && (
              <Token
                key={idx + 2000}
                player={0}
                unit={u}
                damage={(u.hp - u.injuries) / u.hp}
                idx={idx}
                pos={XYpos(u.pos)}
                game={game}
                turn={game.turn%2===idx && game.turn%2===0}
                handleClick={handleIconClick}
              />
            )
        )}

        {game.p2.units.map(
          (u, idx) =>
            boardPos.current && (
              <Token
                key={idx + 2100}
                player={1}
                unit={u}
                damage={(u.hp - u.injuries) / u.hp}
                idx={idx}
                game={game}
                pos={XYpos(u.pos)}
                handleClick={handleIconClick}
                turn={game.turn%2===idx && game.turn%2===1}
              />
            )
        )}
      </div>

            </div>
  );
}
