import BookSearch from '../organism/BookSearch';
import ToReadBooks from '../organism/ToReadBooks';
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
        gap={'0.5rem'}
      >
        <PrincipalHeader />
        <Flex wrap={'wrap'} justifyContent={'space-around'}>
          <BookSearch />
          <ToReadBooks />{' '}
        </Flex>
        <Flex wrap={'wrap'} justifyContent={'space-around'}>
          <ReadingBooks />
          <ReadBooks />
        </Flex>
      </Flex>
    </SearchContextProvider>
  );
};

export default PrincipalLayOut;
