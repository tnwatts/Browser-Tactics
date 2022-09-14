import "./GameBoard.css";
import "./Token.css";
import Token from "./Token";
import GameControls from "../../components/GameControls/GameControls";
import { updateBoardState } from "../../utilities/games-api";
import { useState, useEffect, useRef } from "react";
import { getUsersGame } from "../../utilities/games-api";
export default function GameBoard({ game, setGame }) {
  const [xy, setXY] = useState([1,1])
  const [targeting, setTargeting] = useState(false)
  const [board, setBoard] = useState(
    Array(330)
      .fill(0)
      .map((a, i) => [i % 22, Math.floor(i / 22)])
  );

  const boardPos = useRef();
  const boardCells = useRef(new Array());

  function XYpos(arr) {
    let xPos = boardPos.current.offsetLeft + 3 + arr[0] * 40.6;
    let yPos = boardPos.current.offsetTop + 3 + arr[1] * 40.6;
    return [xPos, yPos];
  }


 async function moveTo(id){
   let unitIdx = Math.floor((game.turn % 6) / 2)
   
   console.log(unitIdx, Math.floor(game.turn%6))
  let gameCup = { ...game };
    if (Math.floor(game.turn%2) ===0) {gameCup.p1.units[unitIdx].pos = xy}
    if (Math.floor(game.turn%2) ===1) {gameCup.p2.units[unitIdx].pos = xy}
    gameCup.turn = game.turn+1
    let gameHolder = await updateBoardState(gameCup._id, gameCup);
    setGame(gameHolder)
  }


  function meleeAttack(source, target) {
    let gameCup = { ...game };
    source.damage += source.attackMultiplier*20
  }

  async function endTurn() {
    let gameCup = { ...game };
    gameCup.turn++;
    let gameHolder = await updateBoardState(gameCup._id, gameCup);
  }
  return (
    <div className="game-board-container lighten-area border border-3 border-info border mt-2 rounded-5 ps-3 py-2 dark-background">
      <GameControls
        game={game}
        setGame={setGame}
        XYpos={XYpos}
        endTurn={endTurn}
        xy={xy}
        moveTo={moveTo}
        meleeAttack={meleeAttack}
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
              onClick={()=> setXY([cell[0],cell[1]])}
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
                turn={game.turn%3===idx && game.turn%2===0}
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
                turn={game.turn%3===idx && game.turn%2===1}
              />
            )
        )}
      </div>

            </div>
  );
}
