import { Flex } from '@chakra-ui/react';
import { useSearchContext } from '../../contexts/SearchContextProvider';
const SelectedBooksList = () => {
  const { books } = useSearchContext();
  console.log(books);
  return (
    <Flex as='section' border={'1px'} w={'45vw'} h={'42vh'} minW={'300px'}>
      SelectedBooksList
    </Flex>
  );
};

export default SelectedBooksList;
