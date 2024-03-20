import { useState, useEffect } from 'react';

const useFetch = (URL) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    if (!URL) {
      setError('Missing URL');
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(URL);
        if (!res.ok) {
          throw new Error('Error with response');
        }
        const resData = await res.json();
        setData(resData);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      setError(null);
    };
  }, [URL]);

  return [data, error, loading];
};

export default useFetch;
