import { useEffect, useState } from "react";
import { api } from "../common";

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T[]>();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await api.get(url);
      console.log(res.data);

      setData(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const reFetch = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, isLoading, reFetch };
};
