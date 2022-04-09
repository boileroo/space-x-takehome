import { useState } from "react";
import axios from "axios";

export const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const invokeFetch = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const response = await axios(url);
      console.log(response);
      setData(response.data);
    } catch (error) {
      setIsError(true);
      console.error(error);
    }
    setIsLoading(false);
  };

  return [{ data, isLoading, isError }, invokeFetch];
};
