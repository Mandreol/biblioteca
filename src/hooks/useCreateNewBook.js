import useCurrentDate from './useCurrentDate';
import { useSearchContext } from '../contexts/SearchContextProvider';

const useCreateNewBook = () => {
  const { addBook } = useSearchContext();
  const { currentDate } = useCurrentDate();
  const { books } = useSearchContext();

  function createNewBook(bookData) {
    const comprovation = books.some((objeto) => objeto.id === bookData.cover_i);
    const book = {
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
    if (!comprovation) {
      addBook(book);
    } else {
      return 'el libro ya exise';
    }
  }

  return { createNewBook };
};

export default useCreateNewBook;
