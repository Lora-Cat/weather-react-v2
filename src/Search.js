import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  let [searchValue, setSearchValue] = useState("");
  return (
    <div className="row SearchModule">
      <div className="col-12 col-md-8">
        <form role="search" className="full-width" id="search">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a location"
              id="search-location"
            />
            <span className="input-group-btn">
              <input type="submit" className="btn btn-success" value="Search" />
            </span>
          </div>
        </form>
      </div>
      <div className="col-12 col-md-4">
        <button className="btn btn-primary full-width" id="currentLocation">
          Current location
        </button>
      </div>
    </div>
  );
}
