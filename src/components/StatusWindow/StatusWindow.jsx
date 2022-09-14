import "./Status.css";
import {  useState } from "react";
import { addPlayer2 } from "../../utilities/games-api";
export default function StatusWindow({ game, setGame, startGame }) {
  const [inputPlayer, setInputPlayer] = useState("");


  function handleChange(evt) {
    setInputPlayer(evt.target.value);
  }
  async function handleAddPlayer() {
    let gameCup = await addPlayer2(inputPlayer);
    setGame(gameCup);
  }
  return (
    <>
      <div
        className="offcanvas h-50 offcanvas-bottom"
        tabIndex="-1"
        id="offcanvasBottom"
        aria-labelledby="offcanvasBottomLabel"
      >
        <div className="offcanvas-header  dark-background light-text">
          <h5 className="h-75" id="offcanvasBottomLabel">
            Status
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white btn btn-outline-warning"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body row large light-background dark-text p-4">
          <div className="col-2 mx-3 light-backgroundg  unit-wrap border lifted border-1 border-warning rounded-2">
            <h5 className="text-dark small mx-auto my-1 pb-1">
              {game.p1.units[0].name}
            </h5>
            <div
              className="selector "
              style={{ backgroundImage: `url(${game.p1.units[0].image}` }}
            ></div>
            <h6 className="darkest-text mx-auto lifted rounded-2 light-background">
              The {game.p1.units[0].archetype}
            </h6>
          </div>
          <div className="lifted col-2 light-backgroundg unit-wrap border border-1 border-warning rounded-2">
            <h5 className="text-dark mx-auto my-1">{game.p1.units[1].name}</h5>
            <div
              className="selector"
              style={{ backgroundImage: `url(${game.p1.units[1].image}` }}
            ></div>
            <h6 className="darkest-text mx-auto lifted rounded-2 light-background">
              {game.p1.units[1].archetype}
            </h6>
          </div>
          <div className="col-2 mx-3 lifted light-backgroundg unit-wrap border border-1 border-warning rounded-2">
            <h5 className="text-dark mx-auto my-1">
              {game.p1.units[2].archetype}
            </h5>
            <div
              className="selector"
              style={{ backgroundImage: `url(${game.p1.units[2].image}` }}
            ></div>
            <h6 className="darkest-text mx-auto lifted rounded-2 light-background">
              {game.p1.units[2].name}
            </h6>
          </div>
          <div className="col-4 mx-auto lifted py-5 my-2 light-background darken-area border border-2 border-warning rounded-2 ">
            {!game.p2.profile && (
              <>
                <h5>Add Player:</h5>
                <input onChange={handleChange}></input>
                <button
                  onClick={handleAddPlayer}
                  className="btn dark-background btn-warning btn-outline-warning mx-1"
                >
                  Add
                </button>
              </>
            )}
            {game.p2.profile && !game.phase === 0 ? (
              <div>
                <h5 className="darkest-text">Player 2 set.</h5>
                <h5 className="darkest-text">Game Ready.</h5>
                <h5 className="darkest-text">Start?</h5>
                <button
                  onClick={startGame}
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  className="col-12 btn dark-background btn-warning btn-outline-warning  my-5"
                >
                  {" "}
                  START{" "}
                </button>
              </div>
            ) : (
              <>
                <h1 className="col-8 mx-auto my-4 lighten-area dark-background light-text p-4 rounder-3 border-3 border-primary border lifted  large">
                  Game On!
                </h1>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
