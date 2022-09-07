export default function StatusWindow({ game }) {
  return (
    <>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasBottom"
        aria-controls="offcanvasBottom"
      >
        Status
      </button>

      <div
        className="offcanvas mh-75 offcanvas-bottom"
        tabindex="-1"
        id="offcanvasBottom"
        aria-labelledby="offcanvasBottomLabel"
      >
        <div className="offcanvas-header h-25 dark-background light-text">
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
        <div className="offcanvas-body  large light-background dark-text">...</div>
      </div>
    </>
  );
}
