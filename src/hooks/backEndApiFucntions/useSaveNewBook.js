import { useState, useEffect } from 'react';
import axios from 'axios';

const useSaveNewBook = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const saveBook = async (data) => {
    setLoading(true);
    try {
      await axios.post('https://readinglist-backend.onrender.com/books/', data);
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

  return { saveBook, error, loading };
};

export default useSaveNewBook;
