export default function GameControls({
  game,
  meleeAttack,
  moveTo,
  endGame,
  user,
}) {
  return (
    <div className="controls light-backgroundg ">
      <h4 className="dark-background light-lifted light-text lighter-text  rounded-4 border border-2 border-danger">
        Game Controls
        <div>
          {game.p1.profile === user._id ? (
            <small className="info">You are Player One!</small>
          ) : (
            <small className="info">"You are Player Two!"</small>
          )}
        </div>
      </h4>
      <div className="actions">
        <button
          className="lighten-area fs-6 light-text text-warning border px-3 border-1 mx-2 border-warning light-lifted  rounded-5 dark-backgroundg"
          onClick={meleeAttack}
        >
          <small className="">Attack</small>
        </button>

        <button
          className="lighten-area fs-6 light-text text-warning border px-3 mx-2 border-1 border-warning light-lifted  rounded-5 dark-backgroundg"
          onClick={moveTo}
        >
          <small className="">Move</small>
        </button>
      </div>
      <div className="light-lifted darken-area fs-6 mb-2 ms-1   rounded-5 bottom-0 darker-background border  border-1 border-warning ">
        <button
          onClick={endGame}
          className="btn light-text text-danger e1 btn-danger lighten-area fs-6 rounded-pill btn-outline-danger border border-1 border-danger lifted px-4 mx-2 m-1 dark-backgroundg"
        >
          End Game
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
    </div>
  );
}
