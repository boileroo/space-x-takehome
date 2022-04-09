import React from "react";
import moment from "moment";

export const LaunchItem = ({ launch, index }) => {
  const { flight_number, mission_name, launch_date_utc, rocket } = launch;

  let formattedLaunchDate = moment(launch_date_utc).format("Do MMM YYYY");

  return (
    <li key={index}>
      <div>
        <span>{`#${flight_number} `}</span>
        <span>{`${mission_name} `}</span>
      </div>
      <div>
        <span>
          <span>{`${formattedLaunchDate} `}</span>
          <span>{`${rocket.rocket_name}`}</span>
        </span>
      </div>
    </li>
  );
};
