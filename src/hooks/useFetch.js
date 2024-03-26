import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchContext } from '../contexts/SearchContextProvider';

const useFetch = (URL) => {
  const { data, setData, loading, setLoading, error, setError } =
    useSearchContext();

  useEffect(() => {
    if (!URL) {
      setError('debes complectar el campo de busqueda');
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(URL);
        setData(res.data.docs);
      } catch (error) {
        setError(`Error: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      setData(null);
      setError(null);
      setLoading(false);
    };
  }, [URL]);
};

export default useFetch;
