import { useState, useRef, useEffect } from "react";

export default function GameControls({ game, setGame, updateBoard, endTurn }) {
  return (
    <div className="position-relative darkest-text fs-1 ps-4 lifted rounded-4 border border-2 border-info light-backgroundg darken-area my-3 py-3 pb-3 ">
      <h4 className="dark-backgroundg light-lifted font-weight-bold e2 mb-1 mt-2 lighter-text text-info p-1 px-4 p-2 mb-3 fs-4 rounded-3 border border-2 border-info">
        Game Controls
      </h4>
      <div className="col-11 light-lifted position-absolute  darken-area fs-6 mb-2 ms-2   rounded-5 bottom-0 start-0  darker-background border  border-1 border-warning ">
        <button
          className="lighten-area light-text text-warning border border-1 border-warning btn-border lifted  m-1 p-2 px-3 rounded-5 dark-backgroundg"
          onClick={updateBoard}
        >
          <small className="">Set Board</small>
        </button>
        <button
          className="btn light-text text-danger e1 btn-danger lighten-area fs-6 rounded-pill btn-outline-danger border border-1 border-danger lifted px-4 mx-2 m-1 dark-backgroundg"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasBottom"
          aria-controls="offcanvasBottom"
        >
          <small className="">Status</small>
        </button>
      </div>
      <div className="container light-text lighter-text fs-6 p-0 box-shadows light-lifted  dark-background lighten-area border border-danger border-1 my-0 rounded-4 box-shadow px-1 me-1  e1">
        {(Math.floor(game.turn / 6) + 1) % 2 === 1
          ? "It's Player Ones turn!"
          : "It`s Player Twos turn!"}{" "}
      </div>
      {/* {game.p1.} */}
      <button
        onClick={endTurn}
        className="btn lighter-text btn-small btn-outline-warning rounded-pill dark-background darken-area text-warning  lifted border-warning border border-2"
      >
        End Turn
      </button>
    </div>
  );
}
