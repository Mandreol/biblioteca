import { useState, useEffect } from 'react';
import axios from 'axios';

const useRemoveBook = (bookId) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      try {
        const res = await axios.delete(
          `https://readinglist-backend.onrender.com/books/${bookId}`
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

export default useRemoveBook;
