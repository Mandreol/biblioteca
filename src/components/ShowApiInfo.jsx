import { useState, useEffect } from 'react';
import SearchInput from './SearchInput';
import useUrlConstructor from '../hooks/useUrlConstructor';
import useApi from '../hooks/useApi';
import useSearchApiData from '../hooks/useSearchApiData';
const URL_BASE = 'https://openlibrary.org/';

const ShowApiInfo = () => {
  const [inputValue, SetInputValue] = useState('');
  const [searchParameter, setSearchParameter] = useState('search.json?q=');
  const [URL] = useUrlConstructor(URL_BASE, searchParameter, inputValue);
  const [data, error, loading] = useApi(URL);
  let dataFilterValues = [];
  console.log(inputValue);
  if (!null && data) {
    dataFilterValues = useSearchApiData({ data, searchParameter });
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
      {loading && <p>cargando</p>}
      <ul>
        {dataFilterValues.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </section>
  );
};

export default ShowApiInfo;
