import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const invokeFetch = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      console.log("Fetching data!");
      const response = await axios(url);
      setData(response.data);
    } catch (error) {
      setIsError(true);
      console.error(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    invokeFetch();
  }, []);

  return [{ data, isLoading, isError }, invokeFetch];
};
