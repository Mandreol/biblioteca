import { Flex } from '@chakra-ui/react';
import { useSearchContext } from '../../contexts/SearchContextProvider';
import ReadingCardSlider from '../molecules/ReadingCardSlider';
import { useState } from 'react';

const ReadingBooks = () => {
  const { books, removeBook, changeState, setPages } = useSearchContext();
  const [pagesValue, setPagesValue] = useState();
  const readingBooks = books.filter((book) => book.state === 'reading');

  return (
    <Flex
      as='section'
      border={'1px'}
      w={'45vw'}
      h={'42vh'}
      minW={'300px'}
      justify={'center'}
      alignItems={'center'}
    >
      {readingBooks.length > 0 ? (
        <ReadingCardSlider
          books={readingBooks}
          changeState={changeState}
          setPages={setPages}
        />
      ) : (
        'No estás leyendo nada en este momento'
      )}
    </Flex>
  );
};

export default ReadingBooks;
