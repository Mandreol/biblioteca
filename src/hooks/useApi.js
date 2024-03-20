import { useState, useEffect } from 'react';
import axios from 'axios';

const useApi = (URL) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    if (!URL) {
      setError('URL missing');
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(URL);
        setData(res.data.docs);
      } catch (error) {
        setError(
          `Error: ${error.response}, Status: ${
            error.response
          }, Headers: ${JSON.stringify(error.response)}`
        );
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

  return [data, error, loading];
};

export default useApi;
