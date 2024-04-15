import useCurrentDate from './useCurrentDate';
import { useSearchContext } from '../contexts/SearchContextProvider';

const useCreateNewBook = () => {
  const { addBook } = useSearchContext();
  const { currentDate } = useCurrentDate();

  function createNewBook(bookData) {
    const book = {
      id: bookData.cover_i,
      title: bookData.title,
      author: bookData?.author_name[0],
      imgUrl: `https://covers.openlibrary.org/b/id/${bookData.cover_i}-L.jpg`,
      recommendationDate: currentDate,
      state: 'to read',
      initializationDate: '',
      finishDate: '',
      pagesRead: 0,
      notes: [{ title: '', note: '' }],
    };
    addBook(book);
  }

  return { createNewBook };
};

export default useCreateNewBook;
