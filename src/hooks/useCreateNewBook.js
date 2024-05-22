import useCurrentDate from './useCurrentDate';
import { useSearchContext } from '../contexts/SearchContextProvider';

const useCreateNewBook = () => {
  const { addBook, books } = useSearchContext(); // Desestructura ambas propiedades de una sola llamada
  const { currentDate } = useCurrentDate();

  function createNewBook(bookData) {
    const bookExists = books.some((objeto) => objeto.id === bookData.cover_i); // Renombrar comprobación
    const newBook = {
      id: bookData.cover_i,
      title: bookData.title,
      author: bookData?.author_name?.length ? bookData.author_name[0] : '',
      imgUrl: `https://covers.openlibrary.org/b/id/${bookData.cover_i}-L.jpg`,
      recommendationDate: currentDate,
      state: 'to read',
      initializationDate: '',
      finishDate: '',
      pagesRead: 0,
      notes: [],
    };

    if (!bookExists) {
      addBook(newBook);
      return newBook;
    } else {
      return 'El libro ya existe';
    }
  }

  return createNewBook;
};

export default useCreateNewBook;
