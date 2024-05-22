import { useState, useEffect } from 'react';
import axios from 'axios';
const URL_BASE = 'https://readinglist-backend.onrender.com/';

const useGetAllBooks = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          'https://readinglist-backend.onrender.com/books/'
        );
        setData(res.data);
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
      setData(null);
      setError(null);
      setLoading(false);
    };
  }, [URL]);

  return [data, error, loading];
};

export default useGetAllBooks;
