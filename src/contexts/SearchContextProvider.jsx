import { createContext, useState, useContext } from 'react';
export const SearchContext = createContext();

export function SearchContextProvider(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('sin errores');

  const value = {
    data,
    setData,
    loading,
    setLoading,
    error,
    setError,
  };

  return (
    <SearchContext.Provider value={value}>
      {props.children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  const context = useContext(SearchContext);
  return context;
}
