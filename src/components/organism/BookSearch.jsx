import SearchBar from '../molecules/SearchBar';
import SuggestionCard from '../molecules/SuggestionCard';
import SuggestionsList from '../molecules/SuggestionsList';
import '../../styles/organism/booksSearch.css';
import { useState, useEffect } from 'react';
import useUrlConstructor from '../../hooks/useUrlConstructor';
import useSearchApiData from '../../hooks/useSearchApiData';
import useApi from '../../hooks/useApi';

const BASE_URL = 'https://openlibrary.org/';

const BookSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchParameter, setSearchParameter] = useState('search.json?q=');
  const [URL] = useUrlConstructor(BASE_URL, searchParameter, inputValue);
  const [selectedInput, setSelectedInput] = useState();
  let IMG_URL = '';

  let param = searchParameter === 'search/authors.json?q=' ? 'name' : 'title';
  let dataFilter = useSearchApiData({ inputValue });

  function fechtData(URL) {
    return useApi(URL);
  }
  const { data, error, loading } = fechtData(URL);

  useEffect(() => {
    if (!selectedInput) return;
    IMG_URL = useUrlConstructor(
      BASE_URL,
      'id/',
      `${selectedInput.cover_i}-L.jpg`
    );
  }, []);

  return (
    <section className='bookSearch-container'>
      <SearchBar
        handleSearchParameterValue={setSearchParameter}
        handleInputChange={setInputValue}
        inputValue={inputValue}
        handleFuntion={fechtData}
      />
      {loading && <p>loading...</p>}
      {error && <p>{error}</p>}
      <SuggestionsList
        data={dataFilter}
        param={param}
        handlSetectedInput={setSelectedInput}
      />
      {selectedInput && (
        <SuggestionCard IMG_URL={IMG_URL} text={selectedInput} />
      )}
    </section>
  );
};

export default BookSearch;
