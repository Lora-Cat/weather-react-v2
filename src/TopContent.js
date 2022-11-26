/** @format */

export default function TopContent(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let dayOfWeek = days[props.data.getDay()];
  let month = monthNames[props.data.getMonth()];
  let data = props.data.getDate();
  let hours = props.data.getHours();
  if (hours < 10) hours = `0${hours}`;
  let minutes = props.data.getMinutes();
  if (minutes < 10) minutes = `0${minutes}`;
  return (
    <div className="row weather">
      <div className="col-12 col-md-6">
        <div className="cityName">{props.cityName}</div>
        <div className="stateName">{props.state}</div>
      </div>
      <div className="col-6 col-md-3">
        <div className="time">
          {hours}
          <span id="blink">:</span>
          {minutes}
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="currentDate">
          {dayOfWeek}
          <br />
          {month} {data}
        </div>
      </div>
    </div>
  );
}
