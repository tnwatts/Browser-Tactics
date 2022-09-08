import "./Status.css"
export default function StatusWindow({ game, setGame, usersUnits, setUsersUnits }) {
    function log(){
        console.log(game, usersUnits)
    }
  return (
    <>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasBottom"
        aria-controls="offcanvasBottom"
        onClick={log}
      >
        Status
      </button>

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
        <div className="offcanvas-body row large light-background dark-text">
            <div className="col-2 h-50 border mx-3 border-primary border-3 rounded-2 selector" style={{ backgroundImage: `url(${usersUnits[0].image}`}} >{usersUnits[0].name}</div>
            <div className="col-2 h-50 border mx-3 border-primary border-3 rounded-2 selector"  style={{ backgroundImage: `url(${usersUnits[1].image}`}} >{usersUnits[1].name}</div>
            <div className="col-2 h-50 border mx-3 border-primary border-3 rounded-2 selector"  style={{ backgroundImage: `url(${usersUnits[2].image}`}} >{usersUnits[2].name}</div>
        </div>
      </div>
    </>
  );
}
