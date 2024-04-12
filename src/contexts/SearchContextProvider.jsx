import { createContext, useState, useContext } from 'react';
export const SearchContext = createContext();

export function SearchContextProvider(props) {
  const [books, setBooks] = useState([]);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const removeBook = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  };

  const value = {
    books,
    addBook,
    removeBook,
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
