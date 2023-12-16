import React, { Fragment } from "react";

function Spinner() {
  return (
    <Fragment>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </Fragment>
  );
}

export default Spinner;
