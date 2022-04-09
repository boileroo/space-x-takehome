// Change below function to API call
export const useFetchData = (url) => {
  const [data, setData] = React.useState([]);
  const [isError, setIsError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const invokeFetch = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const response = await fetch(url);
      setData(response.data);
    } catch (error) {
      setIsError(true);
      console.error(error);
    }
    setIsLoading(false);
  };

  return [{ data, isLoading, isError }, invokeFetch];
};
