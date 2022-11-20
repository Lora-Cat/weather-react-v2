/** @format */

import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-8">
          <img src="./images/logo.png" alt="logo" className="logo" />
          <h1>
            Weather <br />
            <span>Forecast</span>
          </h1>
        </div>
        <div className="col-12 col-sm-12 col-md-4">
          <button
            className="btn btn-success full-width"
            data-bs-toggle="modal"
            data-bs-target="#sampleModal"
          >
            Sign in
          </button>
          <button
            className="btn btn-primary full-width"
            data-bs-toggle="modal"
            data-bs-target="#sampleModal"
          >
            Register
          </button>
        </div>
      </div>
    </header>
  );
}
