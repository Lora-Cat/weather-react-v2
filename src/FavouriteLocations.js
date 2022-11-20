/** @format */

import "./FavouriteLocations.css";

export default function FavouriteLocations() {
  return (
    <div className="row FavouriteLocations">
      <div className="col-12 col-sm-12 col-md-8">
        <h2>Favourite locations</h2>
        <ul className="fav-locations">
          <li className="location">
            <a href="/" role="button">
              Paris
            </a>
          </li>
          <li className="location">
            <a href="/" role="button">
              Tokyo
            </a>
          </li>
          <li className="location">
            <a href="/" role="button">
              Sydney
            </a>
          </li>
          <li className="location">
            <a href="/" role="button">
              Lisbon
            </a>
          </li>
        </ul>
      </div>
      <div className="col-12 col-sm-12 col-md-4">
        <div className="right">
          <button
            className="btn btn-success full-width"
            data-bs-toggle="modal"
            data-bs-target="#sampleModal"
          >
            + Add new location
          </button>
        </div>
      </div>
    </div>
  );
}
