import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

interface UseAxiosProps<T> {
  data: T | null;
  error: AxiosError | null;
  loading: boolean;
}

export const useAxios = <T,>(url: string, options?: AxiosRequestConfig): UseAxiosProps<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response: AxiosResponse<T> = await axios(url, options);
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err as AxiosError);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, loading };
};
