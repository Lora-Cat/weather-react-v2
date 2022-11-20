import "./TopLocations.css";

export default function TopLocations() {
  return (
    <div className="TopLocations">
      <div className="row">
        <div className="col-12">
          <h3>Top 10 city weather forecasts</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-6 col-md-3">
          <ul className="top-locations">
            <li>
              <a href="/">New York</a>
            </li>
            <li>
              <a href="/">Paris</a>
            </li>
            <li>
              <a href="/">Athens</a>
            </li>
            <li>
              <a href="/">Kyiv</a>
            </li>
            <li>
              <a href="/">London</a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md-3">
          <ul className="top-locations">
            <li>
              <a href="/">Dubai</a>
            </li>
            <li>
              <a href="/">Madrid</a>
            </li>
            <li>
              <a href="/">Berlin</a>
            </li>
            <li>
              <a href="/">Beijing</a>
            </li>
            <li>
              <a href="/">Tokyo</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
