import { useState, useEffect } from 'react';
import axios from 'axios';

const useUpdateBook = (bookId, data) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      try {
        const res = await axios.post(
          `https://readinglist-backend.onrender.com//books/${bookId}`,
          data
        );
      } catch (error) {
        setError(
          `Error: ${error.response}, Status: ${
            error.response.status
          }, Headers: ${JSON.stringify(error.response.headers)}`
        );
      } finally {
        setLoading(false);
      }
    };

    fetchApi();

    return () => {
      setError(null);
      setLoading(false);
    };
  }, []);

  return [error, loading];
};

export default useUpdateBook;
