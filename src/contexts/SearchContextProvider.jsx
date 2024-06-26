import { createContext, useState, useContext } from 'react';
export const SearchContext = createContext();
import useCurrentDate from '../hooks/useCurrentDate';

export function SearchContextProvider(props) {
  const [books, setBooks] = useState([]);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const removeBook = (id) => {
    const updatedBooks = [...books];
    const index = updatedBooks.findIndex((e) => e.id === id);
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  };
  const changeState = (id) => {
    const startDate = useCurrentDate();
    setBooks((prevBooks) => {
      const updatedBooks = [...prevBooks];
      const index = updatedBooks.findIndex((e) => e.id === id);
      updatedBooks[index] = {
        ...updatedBooks[index],
        state: updatedBooks[index].state === 'to read' ? 'reading' : 'read',
        startDate: startDate,
        finishDate: updatedBooks[index].state === 'reading' ? currentDate : '',
      };
      return updatedBooks;
    });
  };
  const setPages = (value, id) => {
    setBooks((prevBooks) => {
      const updatedBooks = [...prevBooks];
      const index = updatedBooks.findIndex((e) => e.id === id);
      updatedBooks[index] = {
        ...updatedBooks[index],
        pagesRead: value,
      };

      return updatedBooks;
    });
  };
  const saveNote = (value, id) => {
    setBooks((prevBooks) => {
      const updatedBooks = [...prevBooks];
      const index = updatedBooks.findIndex((e) => e.id === id);
      updatedBooks[index] = {
        ...updatedBooks[index],
        notes: [...updatedBooks[index].notes, value],
      };

      return updatedBooks;
    });
  };
  const value = {
    books,
    addBook,
    removeBook,
    changeState,
    setPages,
    saveNote,
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
