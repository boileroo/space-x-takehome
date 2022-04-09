import React from "react";
import moment from "moment";

export const LaunchItem = ({ launch }) => {
  const { flight_number, mission_name, launch_date_utc, rocket } = launch;

  let formattedLaunchDate = moment(launch_date_utc).format("Do MMM YYYY");

  return (
    <div className="launch-item">
      <div className="launch-item__flight-number">
        <span>{`#${flight_number} `}</span>
      </div>
      <div className="launch-item__mission-name">
        <span>{`${mission_name} `}</span>
      </div>
      <div className="launch-item__info">
        <span>
          <div className="launch-item__info__date">{`${formattedLaunchDate} `}</div>
          <div className="launch-item__info__rocket">{`${rocket.rocket_name}`}</div>
        </span>
      </div>
    </div>
  );
};
