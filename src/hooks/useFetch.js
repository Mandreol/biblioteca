import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (URL) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!URL) {
      setError('Debes completar el campo de búsqueda');
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(URL);
        setData(res.data.docs);
      } catch (error) {
        setError(error);
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

  return { data, error, loading };
};

export default useFetch;
