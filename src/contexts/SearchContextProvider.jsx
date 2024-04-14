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
  const changeState = (index) => {
    const initializationDate = new Date();
    setBooks((prevBooks) => {
      const updatedBooks = [...prevBooks];
      updatedBooks[index] = {
        ...updatedBooks[index],
        state: updatedBooks[index].state === 'to read' ? 'reading' : 'read',
        initializationDate: initializationDate,
      };
      return updatedBooks;
    });
  };
  const value = {
    books,
    addBook,
    removeBook,
    changeState,
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
