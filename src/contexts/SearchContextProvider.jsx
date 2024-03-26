import { createContext, useState, useContext } from 'react';
export const SearchContext = createContext();

export function SearchContextProvider(props) {
  const [searchFlag, setSearchState] = useState(false);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('sin errores');

  const value = {
    searchFlag,
    data,
    loading,
    error,
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
