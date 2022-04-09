import React from "react";

import { useFetchData } from "../../api/useFetchData/useFetchData";

import CONSTANTS from "../../constants/Config";

export const launchContextDefaults = {
  listLaunches: Function,
  data: [],
  isError: false,
  isLoading: false,
  sort: false,
  setSort: Function,
  filter: "",
  setFilter: Function,
};

export const LaunchContext = React.createContext(launchContextDefaults);
export const useLaunchContext = () => React.useContext(LaunchContext);

export const LaunchProvider = ({ children }) => {
  const [sort, setSort] = React.useState(false);
  const [filter, setFilter] = React.useState("");
  const [{ data, isLoading, isError }, invokeFetch] = useFetchData(CONSTANTS.SPACE_X_API);

  return (
    <LaunchContext.Provider
      value={{
        listLaunches: React.useCallback(async () => {
          setFilter("");
          setSort(false);
          await invokeFetch();
        }, []),
        data,
        isLoading,
        isError,
        sort,
        setSort,
        filter,
        setFilter,
      }}
    >
      {children}
    </LaunchContext.Provider>
  );
};
