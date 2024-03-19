import { useState, useEffect } from 'react';
import SearchInput from './SearchInput';
import useUrlConstructor from '../hooks/useUrlConstructor';
import useApi from '../hooks/useApi';
import useSearchApiData from '../hooks/useSearchApiData';
const URL_BASE = 'https://openlibrary.org/search.json?';

const ShowApiInfo = () => {
  const [inputValue, SetInputValue] = useState('');
  const [searchParameter, setSearchParameter] = useState('q=');
  const [URL] = useUrlConstructor(URL_BASE, searchParameter, inputValue);
  const [data] = useApi(URL);

  if (!null && data) {
    console.log(data.docs.map((e) => e.title));
    // const [dataValue] = useSearchApiData(data, searchParameter);
    // console.log(dataValue);
  }

  return (
    <section
      style={{ width: '500px', height: '500px', backgroundColor: 'green' }}
    >
      <SearchInput
        handleInputValue={SetInputValue}
        handleSearchParameter={setSearchParameter}
      />
      <p>{URL}</p>
    </section>
  );
};

export default ShowApiInfo;
