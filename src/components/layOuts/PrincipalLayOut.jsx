import BookSearch from '../organism/BookSearch';
import SelectedBooksList from '../organism/SelectedBooksList';
import PrincipalHeader from '../organism/PrincipalHeader';
import ReadBooks from '../organism/ReadBooks';
import ReadingBooks from '../organism/ReadingBooks';
import { Flex } from '@chakra-ui/react';
import { SearchContextProvider } from '../../contexts/SearchContextProvider';
const PrincipalLayOut = () => {
  return (
    <SearchContextProvider>
      <Flex
        as={'main'}
        flexDirection={'column'}
        width={'95vw'}
        h={'100%'}
        gap={'1rem'}
      >
        <PrincipalHeader />
        <Flex wrap={'wrap'} justifyContent={'space-around'} gap={'1rem'}>
          <BookSearch />
          <SelectedBooksList />{' '}
        </Flex>
        <Flex wrap={'wrap'} justifyContent={'space-around'} gap={'1rem'}>
          <ReadingBooks />
          <ReadBooks />
        </Flex>
      </Flex>
    </SearchContextProvider>
  );
};

export default PrincipalLayOut;
