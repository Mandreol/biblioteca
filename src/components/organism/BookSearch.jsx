import SearchBar from '../molecules/SearchBar';
import SuggestionCard from '../molecules/SuggestionCard';
import SuggestionsList from '../molecules/SuggestionsList';
import { useState, useRef } from 'react';
import useUrlConstructor from '../../hooks/useUrlConstructor';
import useSearchApiData from '../../hooks/useFilterData';
import useFetch from '../../hooks/useFetch';
import { Flex, Box, Text, CircularProgress } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react-use-disclosure';

const BASE_URL = 'https://openlibrary.org/search.json?q=';

const BookSearch = () => {
  const [searchFlag, setSearchFlag] = useState(false);
  const [selectData, setSelectData] = useState(false);
  const inputRef = useRef('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const URL = useUrlConstructor(BASE_URL, inputRef.current.value);
  const { data, error, loading } = useFetch(URL);

  let filterData = null;

  if (data) {
    filterData = useSearchApiData({ data });
  }

  function listAcction(data) {
    onOpen();
    setSelectData(data);
  }

  return (
    <Flex
      as='section'
      border={'1px'}
      w={'45vw'}
      h={'42vh'}
      minW={'300px'}
      gap={'0.5rem'}
      flexDirection={'column'}
      padding={'0.5rem'}
    >
      <SearchBar inputRef={inputRef} setSearchFlag={setSearchFlag} />

      {filterData ? (
        <Box w={'100%'} padding={'1rem'} border={'1px'} overflowY={'auto'}>
          {' '}
          <SuggestionsList filterData={filterData} accion={listAcction} />{' '}
        </Box>
      ) : loading ? (
        <CircularProgress
          alignSelf={'center'}
          justifySelf={'center'}
          isIndeterminate
          color='green.300'
          marginTop={'10%'}
        />
      ) : (
        <Text textAlign={'center'} justifySelf={'center'}>
          Ingresa el nombre del libro que deseas buscar
        </Text>
      )}
      <SuggestionCard
        selectData={selectData}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Flex>
  );
};

export default BookSearch;
