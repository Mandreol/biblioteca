import SearchBar from '../molecules/SearchBar';
import SuggestionCard from '../molecules/SuggestionCard';
import SuggestionsList from '../molecules/SuggestionsList';
import { useState, useRef, useEffect } from 'react';
import useUrlConstructor from '../../hooks/useUrlConstructor';
import useSearchApiData from '../../hooks/useSearchApiData';
import useFetch from '../../hooks/useFetch';
import { Flex, Box } from '@chakra-ui/react';
import { useSearchContext } from '../../contexts/SearchContextProvider';

const BASE_URL = 'https://openlibrary.org/';

const BookSearch = () => {
  const [searchFlag, setSearchFlag] = useState(false);
  const inputRef = useRef('');
  const searchParameter = useRef('');
  const { data, loading, error } = useSearchContext();
  const URL = useUrlConstructor(
    BASE_URL,
    searchParameter.current.value,
    inputRef.current.value
  );

  useFetch(URL);
  console.log(data);
  let filterData = null;
  if (data) {
    filterData = useSearchApiData({ data });
  }
  let param = searchParameter === 'search/authors.json?q=' ? 'name' : 'title';

  return (
    <Flex
      as='section'
      border={'1px'}
      w={'45vw'}
      h={'42vh'}
      minW={'300px'}
      flexDirection={'column'}
    >
      <SearchBar
        searchParameter={searchParameter}
        inputRef={inputRef}
        setSearchFlag={setSearchFlag}
      />
      <Box w={'100%'} padding={'1rem'} border={'1px'} overflowY={'auto'}>
        <SuggestionsList filterData={filterData} param={param} />
      </Box>
    </Flex>
  );
};

export default BookSearch;
