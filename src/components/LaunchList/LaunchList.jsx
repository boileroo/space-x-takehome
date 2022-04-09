import React from "react";
import { LaunchItem } from "../LaunchItem";
import { useLaunchContext } from "../../contexts/LaunchContext";

// Component takes a raw list of data (launches), filters it by 'filter' and sorts it by 'sort'
export const LaunchList = () => {
  const { data: launches, sort, filter } = useLaunchContext();

  let filteredLaunches = [...launches];

  if (filter !== "") {
    filteredLaunches = filteredLaunches.filter((launch) => {
      return launch.launch_year === filter;
    });
  }

  let sortedLaunches = filteredLaunches.sort((a, b) => {
    const x = a.launch_date_utc;
    const y = b.launch_date_utc;
    // ISO UTC string supports lexographical sorting
    return x < y ? -1 : y > x ? 1 : 0;
  });

  sortedLaunches = sort ? sortedLaunches.reverse() : sortedLaunches;

  return (
    // TODO: replace keys 'index' with a known unique value
    <ul className="launch-list">
      {sortedLaunches.map((launch, index) => {
        return <LaunchItem key={index} launch={launch} />;
      })}
    </ul>
  );
};
