import "./GameBoard.css";
import "./Token.css";
import Token from "./Token";
import GameControls from "../../components/GameControls/GameControls";
import { updateBoardState } from "../../utilities/games-api";
import { useState, useEffect, useRef } from "react";
import { getUsersGame } from "../../utilities/games-api";
export default function GameBoard({ game, setGame }) {
  const [board, setBoard] = useState(
    Array(330)
      .fill(0)
      .map((a, i) => [i % 22, Math.floor(i / 22)])
  );
  const [coordinate, setCoordinate] = useState([
    [
      [320, 310],
      [340, 370],
      [300, 290],
    ],
    [
      [620, 170],
      [620, 210],
      [640, 230],
    ],
  ]);
  const boardPos = useRef();
  const boardCells = useRef(new Array());

  function XYpos(arr) {
    let xPos = boardPos.current.offsetLeft + 3 + arr[0] * 40.4;
    let yPos = boardPos.current.offsetTop + 2 + arr[1] * 40.7;
    return [xPos, yPos];
  }

  async function updateBoard() {
    console.log(game);
    let newCoord = [];
    let gameCup = { ...game };
    gameCup.p1.units.forEach(function (u) {
      console.log(u.pos);
      newCoord.push(XYpos(u.pos));
    });
    gameCup.p2.units.forEach(function (u) {
      newCoord.push(XYpos(u.pos));
    });
    console.log(newCoord);
    setCoordinate(newCoord);
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
        updateBoard={updateBoard}
        endTurn={endTurn}
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
              className={`game-cell`}
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

      <button
        type="button"
        className="col h-25 dark-text text-dark darken-area lifted fs-6 btn btn-sm border border-4 rounded-pill py-3 border-warning btn-outline-secondary  mx-5 "
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Launch static backdrop modal
      </button>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
