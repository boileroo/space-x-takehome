import React from "react";
import cx from "classnames";
import { useLaunchContext } from "../../contexts/LaunchContext";

export const Select = ({ label, classes, values, error = false, allowDisabledState = false }) => {
  const { setFilter, filter } = useLaunchContext();

  const selectClasses = cx(classes, {
    disabled: allowDisabledState ? error : "",
  });

  return (
    <select
      name={label}
      className={selectClasses}
      onChange={(event) => {
        setFilter(event.target.value);
      }}
      value={filter}
    >
      <option value="" key="no-filter">
        No Filter
      </option>
      {values.map((v) => (
        <option value={v.toString()} key={v}>
          {v.toString()}
        </option>
      ))}
    </select>
  );
};
