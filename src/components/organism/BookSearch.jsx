import SearchBar from '../molecules/SearchBar';
import SuggestionCard from '../molecules/SuggestionCard';
import SuggestionsList from '../molecules/SuggestionsList';
import { useState, useRef, useEffect } from 'react';
import useUrlConstructor from '../../hooks/useUrlConstructor';
import useSearchApiData from '../../hooks/useSearchApiData';
import useFetch from '../../hooks/useFetch';
import { Flex } from '@chakra-ui/react';
import {
  SearchContextProvider,
  useSearchContext,
} from '../../contexts/SearchContextProvider';

const BASE_URL = 'https://openlibrary.org/';

const BookSearch = () => {
  const inputRef = useRef('');
  const inputSelectRef = useRef('');
  const { searchFlag, setSearchState, data, loading, error } =
    useSearchContext();
  console.log(searchFlag, setSearchState, data, loading, error);
  return (
    <Flex as='section' border={'1px'} w={'45vw'} h={'42vh'} minW={'300px'}>
      <SearchBar
        inputSelectRef={inputSelectRef}
        inputRef={inputRef}
        // setSearchState={setSearchState}
      />
    </Flex>
  );
};

export default BookSearch;

// let param = searchParameter === 'search/authors.json?q=' ? 'name' : 'title';
