import { Flex } from '@chakra-ui/react';
import { useSearchContext } from '../../contexts/SearchContextProvider';
import ToReadCardSlider from '../molecules/ToReadCardSlider';

const SelectedBooksList = () => {
  const { books, removeBook, changeState } = useSearchContext();
  const toReadBooks = books.filter((book) => book.state === 'to read');
  console.log(books);
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
      {toReadBooks.length > 0 ? (
        <ToReadCardSlider books={toReadBooks} changeState={changeState} />
      ) : (
        'No tienes ningun libro en la lista'
      )}
    </Flex>
  );
};

export default SelectedBooksList;
