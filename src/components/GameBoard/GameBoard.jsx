import "./GameBoard.css";
import "./Token.css";
import Token from "./Token";
import GameControls from "../../components/GameControls/GameControls";
import { updateBoardState } from "../../utilities/games-api";
import { useState, useEffect, useRef } from "react";
import { getUsersGame } from "../../utilities/games-api";
export default function GameBoard({ game, setGame }) {
  const [xy, setXY] = useState([1,1])
  const [board, setBoard] = useState(
    Array(330)
      .fill(0)
      .map((a, i) => [i % 22, Math.floor(i / 22)])
  );

  const boardPos = useRef();
  const boardCells = useRef(new Array());

  function XYpos(arr) {
    let xPos = boardPos.current.offsetLeft + 3 + arr[0] * 40.4;
    let yPos = boardPos.current.offsetTop + 2 + arr[1] * 40.7;
    return [xPos, yPos];
  }


  function meleeAttack(source, target) {
    let gameCup = { ...game };
    // source.attackMultiploer*20
  }

  async function endTurn() {
    let gameCup = { ...game };
    gameCup.turn++;
    let gameHolder = await updateBoardState(gameCup._id, gameCup);
  }
  return (
    <div className="game-board-container lighten-area border border-3 border-info border mt-2 rounded-5 ps-3 mx-4 py-2 game-board-container dark-background">
      <GameControls
        game={game}
        setGame={setGame}
        XYpos={XYpos}
        endTurn={endTurn}
        xy={xy}

      />

      <div
        ref={boardPos}
        className="e1 light-lifted e2 game-board border-2 m-1 ms-3 mx-4 border border-danger rounded-3 "
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
              {" "}
              x: {cell[0]} y: {cell[1]}
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
                pos={XYpos(u.pos)}
              />
            )
        )}
      </div>

            </div>
  );
}
