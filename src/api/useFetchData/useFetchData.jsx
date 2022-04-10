import { useEffect, useReducer } from "react";
import axios from "axios";

const fetchDataReducer = (state, action) => {
  switch (action.type) {
    case "INITIALISE":
      return { ...state, isLoading: true, isError: false };
    case "SUCCESS":
      return { ...state, isLoading: false, isError: false, data: action.payload };
    case "FAILURE":
      return { ...state, isLoading: false, isError: true };
    default:
      throw new Error();
  }
};

export const useFetchData = (url) => {
  const [state, dispatch] = useReducer(fetchDataReducer, {
    isLoading: false,
    isError: false,
    data: [],
  });

  const invokeFetch = async () => {
    dispatch({ type: "INITIALISE" });
    try {
      const response = await axios(url);
      dispatch({ type: "SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FAILURE" });
    }
  };

  useEffect(() => {
    invokeFetch();
  }, []);

  return [state, invokeFetch];
};
