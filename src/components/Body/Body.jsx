import React, { useEffect, useState } from "react";
import CONSTANTS from "../../constants/Config";
import LABEL from "../../constants/Labels";
import { LaunchList } from "../LaunchList";
import { Button } from "../Button";
import { Select } from "../Select";
import { useLaunchContext } from "../../contexts/LaunchContext";

export const Body = () => {
  const { data: launches, filter, setSort, sort } = useLaunchContext();
  const [yearsRange, setYearsRange] = useState([]);

  useEffect(() => {
    let range = [...new Set(launches.map((launch) => launch.launch_year))];
    setYearsRange(range);
  }, [launches]);

  return (
    <div className="app__body">
      <div>
        <img
          src={CONSTANTS.SPACE_X_IMAGE}
          srcSet={CONSTANTS.SPACE_X_RETINA_IMAGES}
          className="app__main-image"
          alt="Launch Home"
        />
      </div>
      <div className="app__launches">
        <div className="app__filters">
          <Select
            classes="select"
            label={LABEL.FILTER_BY_YEAR}
            testId="filter-button-test"
            values={yearsRange}
          />
          <Button
            filter={filter}
            classes="button button--sort"
            onClick={() => setSort(!sort)}
            label={sort ? LABEL.ASC : LABEL.DESC}
          />
        </div>
        <LaunchList launches={launches} filter={filter} sort={sort} />
      </div>
    </div>
  );
};
