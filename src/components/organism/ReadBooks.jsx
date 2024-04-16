import { Flex } from '@chakra-ui/react';
import { useSearchContext } from '../../contexts/SearchContextProvider';
import ReadCardSlider from '../molecules/ReadCardSlider';

const ReadBooks = () => {
  const { books, removeBook, changeState } = useSearchContext();
  const readBooks = books.filter((book) => book.state === 'read');
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
      {readBooks.length > 0 ? (
        <ReadCardSlider books={readBooks} />
      ) : (
        'Aun no terminas un libro'
      )}
    </Flex>
  );
};

export default ReadBooks;
